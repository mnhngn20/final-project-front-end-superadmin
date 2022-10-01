import { Button, Table, Switch } from 'antd';
import { useState, useMemo } from 'react';
import { EditFilled, EyeFilled } from '@ant-design/icons';
import LocationForm from './Form';
import Filters from './Filters';
import {
  OrderBy,
  useGetLocationsQuery,
  Location,
  useUpdateLocationStatusMutation,
  useUpsertLocationMutation,
  UpsertLocationInput,
} from '#/generated/schemas';
import { FormModal } from '#/shared/components/commons/FormModal';
import { useTable } from '#/shared/hooks/useTable';
import { Link } from 'react-router-dom';
import { DeepPartial } from '#/shared/utils/type';
import { showError, showSuccess } from '#/shared/utils/notification';
import ButtonBrown from '#/shared/components/styled/ButtonBrown';
import { AddSVG } from '#/assets/svgs';

export type GetLocationsFilter<T = string> = {
  name?: string;
  address?: string;
  isActive?: T;
};

function List() {
  const [filters, setFilters] = useState<
    GetLocationsFilter<boolean> | undefined
  >(undefined);
  const { pageSize, onChange, currentPage, setCurrentPage } = useTable();
  const [selectedItem, setSelectedItem] = useState<
    DeepPartial<Location> | undefined
  >(undefined);

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const { data, loading, refetch } = useGetLocationsQuery({
    variables: {
      input: {
        orderBy: OrderBy.Desc,
        page: currentPage,
        limit: pageSize,
        ...filters,
      },
    },
    fetchPolicy: 'network-only',
  });

  const locations = data?.getLocations?.items ?? [];

  const [updateLocationStatus, { loading: changeLocationStatusLoading }] =
    useUpdateLocationStatusMutation({
      onCompleted() {
        showSuccess('Updated location status successfully!');
        refetch();
        clearSelectedItem();
      },
      onError: showError,
    });

  const [upsertLocation, { loading: upsertLocationLoading }] =
    useUpsertLocationMutation({
      onCompleted() {
        showSuccess(
          selectedItem?.id
            ? 'Updated location successfully!'
            : 'Created location successfully!',
        );
      },
    });

  const onFilter = ({ name, address, isActive }: GetLocationsFilter) => {
    const newFilter = {
      ...(name && { name }),
      ...(address && { address }),
      ...(isActive && { isActive: isActive === 'true' }),
    };
    setCurrentPage(1);
    setFilters(newFilter);
  };

  const onSubmit = (values: UpsertLocationInput) => {
    upsertLocation({
      variables: {
        input: {
          ...values,
          ...(selectedItem?.id && { id: Number(selectedItem?.id) }),
        },
      },
    });
  };

  const COLUMNS = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Location Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Status',
        dataIndex: 'isActive',
        key: 'isActive',
        render: (_: unknown, { id, isActive }: DeepPartial<Location>) => (
          <Switch
            checked={isActive}
            onChange={() =>
              updateLocationStatus({
                variables: {
                  input: {
                    id: Number(id),
                    isActive: !isActive,
                  },
                },
              })
            }
          />
        ),
      },
      {
        title: '',
        dataIndex: 'id',
        key: 'action',
        fixed: 'right' as const,
        render: (_: unknown, record: DeepPartial<Location>) => {
          const onEdit = () => {
            setSelectedItem({
              ...record,
            });
          };
          return (
            <div className="flex items-center justify-center">
              <Button className="mr-2 border-none" shape="circle">
                <Link to={`/locations/${record?.id}`}>
                  <EyeFilled />
                </Link>
              </Button>
              <Button onClick={onEdit} className="border-none" shape="circle">
                <EditFilled />
              </Button>
            </div>
          );
        },
      },
    ],
    [updateLocationStatus],
  );

  return (
    <>
      <Filters onFilter={onFilter} />
      <div>
        <ButtonBrown
          type="primary"
          className="float-right w-min"
          onClick={() => setSelectedItem({})}
          icon={<AddSVG className="anticon" />}
        >
          Create
        </ButtonBrown>
      </div>
      <Table
        rowKey="id"
        dataSource={locations}
        columns={COLUMNS}
        scroll={{ x: 'max-content' }}
        loading={
          loading || upsertLocationLoading || changeLocationStatusLoading
        }
        onChange={onChange}
        pagination={{
          total: data?.getLocations.total ?? 0,
          current: currentPage,
        }}
      />
      <FormModal<UpsertLocationInput>
        loading={upsertLocationLoading}
        onSubmit={onSubmit}
        name="Location"
        onClose={clearSelectedItem}
        selectedItem={selectedItem}
        initialValues={selectedItem}
      >
        <LocationForm />
      </FormModal>
    </>
  );
}
export default List;
