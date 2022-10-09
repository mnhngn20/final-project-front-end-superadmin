import { Button, Table, Typography } from 'antd';
import { useState, useMemo } from 'react';
import LocationServiceForm from './Form';
import Filters from './Filters';
import {
  OrderBy,
  Location,
  useGetLocationServicesQuery,
  useUpsertLocationServiceMutation,
  UpsertLocationServiceInput,
  LocationService,
} from '#/generated/schemas';
import { FormModal } from '#/shared/components/commons/FormModal';
import { useTable } from '#/shared/hooks/useTable';
import { DeepPartial } from '#/shared/utils/type';
import { showError, showSuccess } from '#/shared/utils/notification';
import { AddSVG, EditSVG } from '#/assets/svgs';
import PaginationPanel from '#/shared/components/commons/PaginationPanel';
import CustomTag from '#/shared/components/commons/CustomTag';
import { formatDate } from '#/shared/utils/date';

export type GetLocationServicesFilter<T = string> = {
  name?: string;
  isActive?: T;
};

function List() {
  const [filters, setFilters] = useState<
    GetLocationServicesFilter<boolean> | undefined
  >(undefined);
  const { pageSize, onChange, currentPage, setCurrentPage } = useTable();
  const [selectedItem, setSelectedItem] = useState<
    DeepPartial<LocationService> | undefined
  >(undefined);

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const { data, loading, refetch } = useGetLocationServicesQuery({
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

  const locationServices = data?.getLocationServices?.items ?? [];

  const [upsertLocationService, { loading: upsertLocationServiceLoading }] =
    useUpsertLocationServiceMutation({
      onCompleted() {
        showSuccess(
          selectedItem?.id
            ? 'Updated location service successfully!'
            : 'Created location service successfully!',
        );
        clearSelectedItem();
        refetch();
      },
      onError: showError,
    });

  const onFilter = ({ name, isActive }: GetLocationServicesFilter) => {
    const newFilter = {
      ...(name && { name }),
      ...(isActive && {
        isActive: isActive === 'true',
      }),
    };
    setCurrentPage(1);
    setFilters(newFilter);
  };

  const onSubmit = ({ ...values }: UpsertLocationServiceInput) => {
    upsertLocationService({
      variables: {
        input: {
          ...values,
          ...(selectedItem?.id && {
            id: Number(selectedItem?.id),
          }),
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
        title: 'Service Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
        dataIndex: 'isActive',
        key: 'isActive',
        render(isActive: boolean) {
          return (
            <CustomTag
              content={isActive ? 'Active' : 'Inactive'}
              className={
                isActive ? 'bg-success text-[white]' : 'bg-warning text-[white]'
              }
            />
          );
        },
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt: string) => formatDate(createdAt),
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
            <div className="flex items-center justify-center gap-4 text-base text-primary-color">
              <Button onClick={onEdit} type="link">
                <EditSVG width={24} height={24} />
              </Button>
            </div>
          );
        },
      },
    ],
    [],
  );

  return (
    <>
      <Filters onFilter={onFilter} />
      <div className="rounded-xl bg-[white] px-4">
        <div className="flex items-center justify-between py-4">
          <Typography className="text-xl font-semibold">
            Location Service List
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
          dataSource={locationServices}
          columns={COLUMNS}
          scroll={{ x: 'max-content' }}
          loading={loading || upsertLocationServiceLoading}
          onChange={onChange}
          pagination={false}
        />
        <PaginationPanel
          current={currentPage ?? 1}
          pageSize={10}
          total={data?.getLocationServices?.total ?? 0}
          setCurrentPage={setCurrentPage}
          className="flex justify-end py-6 pr-6"
          showQuickJumper
        />
      </div>
      <FormModal<UpsertLocationServiceInput>
        loading={upsertLocationServiceLoading}
        onSubmit={onSubmit}
        name="Location Service"
        onClose={clearSelectedItem}
        selectedItem={selectedItem}
        initialValues={selectedItem}
      >
        <LocationServiceForm />
      </FormModal>
    </>
  );
}
export default List;
