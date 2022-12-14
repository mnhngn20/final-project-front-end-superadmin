import { Button, Table, Switch, Typography } from 'antd';
import { useState, useMemo } from 'react';
import LocationForm from './Form';
import Filters from './Filters';
import {
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
import { AddSVG, EditSVG, EyeSVG } from '#/assets/svgs';
import DefaultImage from '#/assets/images/default.png';
import Image from '#/shared/components/commons/Image';
import PaginationPanel from '#/shared/components/commons/PaginationPanel';
import { formatDate } from '#/shared/utils/date';
import EllipsisText from '#/shared/components/commons/EllipsisText';

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
    DeepPartial<Location & { locationServiceIds?: string[] }> | undefined
  >(undefined);

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const { data, loading, refetch } = useGetLocationsQuery({
    variables: {
      input: {
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
    locationServiceIds,
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
          locationServiceIds: locationServiceIds?.map(id => Number(id)),
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
          return (
            <Image
              url={thumbnail ?? DefaultImage}
              width={100}
              height={100}
              className="object-cover"
            />
          );
        },
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
        title: 'Electric Counter Price',
        dataIndex: 'electricCounterPrice',
        key: 'electricCounterPrice',
        render(electricCounterPrice: number) {
          return `${electricCounterPrice.toLocaleString()} VND/counter`;
        },
      },
      {
        title: 'Total Floor',
        dataIndex: 'numOfFloor',
        key: 'numOfFloor',
        render: (numOfFloor?: number) => numOfFloor ?? 1,
      },
      {
        title: 'Total Revenue',
        dataIndex: 'totalRevenue',
        key: 'totalRevenue',
        render: (totalRevenue?: number) =>
          `${(totalRevenue ?? 0)?.toLocaleString()} VND`,
      },
      {
        title: 'Room Average Price',
        dataIndex: 'minPrice',
        key: 'minPrice',
        render: (minPrice?: number) =>
          `${(minPrice ?? 0)?.toLocaleString()} VND`,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: 250,
        render: (description?: string) => (
          <EllipsisText text={description ?? 'N/A'} />
        ),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 250,
        render: (address?: string) => address ?? 'N/A',
      },
      {
        title: 'Created Date',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (date: Date) => formatDate(date, 'hh:mm A, DD MMMM YYYY'),
      },
      {
        title: 'Updated Date',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        render: (date: Date) => formatDate(date, 'hh:mm A, DD MMMM YYYY'),
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
              locationServiceIds: record?.locationServices?.map(
                service => service?.id,
              ),
            });
          };
          return (
            <div className="flex items-center justify-center gap-4 text-base text-primary-color">
              <Link to={`/locations/${record?.id}`}>
                <EyeSVG width={24} height={24} />
              </Link>
              <Button onClick={onEdit} type="link">
                <EditSVG width={24} height={24} />
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
      >
        <LocationForm />
      </FormModal>
    </>
  );
}
export default List;
