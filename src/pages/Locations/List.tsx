import { Button, Table, Switch, Typography } from 'antd';
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
import { Coordinates, DeepPartial } from '#/shared/utils/type';
import { showError, showSuccess } from '#/shared/utils/notification';
import { AddSVG } from '#/assets/svgs';
import Image from '#/shared/components/commons/Image';
import PaginationPanel from '#/shared/components/commons/PaginationPanel';

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
        clearSelectedItem();
        refetch();
      },
      onError: showError,
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

  const onSubmit = ({
    coordinates,
    contactInformations,
    ...values
  }: UpsertLocationInput & {
    coordinates: Coordinates;
  }) => {
    upsertLocation({
      variables: {
        input: {
          ...values,
          contactInformations: contactInformations?.map(item => ({
            ...item,
            ...(item?.id && { id: Number(item?.id) }),
          })),
          lat: coordinates?.lat,
          long: coordinates?.long,
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
        title: 'Image',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
        render(thumbnail: string) {
          return <Image url={thumbnail} width={100} height={100} />;
        },
      },
      {
        title: 'Location Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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
      <div className="rounded-xl bg-[white] px-4">
        <div className="flex items-center justify-between py-4">
          <Typography className="text-xl font-semibold">
            Location List
          </Typography>
          <Button
            type="primary"
            onClick={() => setSelectedItem({})}
            icon={<AddSVG className="anticon" />}
          >
            Create
          </Button>
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
          pagination={false}
        />
        <PaginationPanel
          current={currentPage ?? 1}
          pageSize={10}
          total={data?.getLocations?.total ?? 0}
          setCurrentPage={setCurrentPage}
          className="flex justify-end py-6 pr-6"
          showQuickJumper
        />
      </div>
      <FormModal<
        UpsertLocationInput & {
          coordinates: Coordinates;
        }
      >
        loading={upsertLocationLoading}
        onSubmit={onSubmit}
        name="Location"
        onClose={clearSelectedItem}
        selectedItem={selectedItem}
        initialValues={selectedItem}
        width="1000"
      >
        <LocationForm />
      </FormModal>
    </>
  );
}
export default List;
