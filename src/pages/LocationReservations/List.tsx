import { Table, Typography } from 'antd';
import { useState, useMemo } from 'react';
import Filters from './Filters';
import {
  OrderBy,
  LocationReservationStatus,
  useGetLocationReservationsQuery,
} from '#/generated/schemas';
import { useTable } from '#/shared/hooks/useTable';
import PaginationPanel from '#/shared/components/commons/PaginationPanel';
import dayjs from 'dayjs';
import { formatDisplayUser } from '#/shared/utils/format';
import CustomTag from '#/shared/components/commons/CustomTag';
import { getLocationReservationStatusColor } from './utils';
import { formatDate } from '#/shared/utils/date';

export type GetLocationReservationsFilter = {
  status?: LocationReservationStatus;
  fromDate?: string;
  toDate?: string;
  createdById?: number;
};

interface LocationReservationListProps {
  locationId?: string;
}

function List({ locationId }: LocationReservationListProps) {
  const [filters, setFilters] = useState<
    GetLocationReservationsFilter | undefined
  >(undefined);
  const { pageSize, onChange, currentPage, setCurrentPage } = useTable();

  const { data, loading } = useGetLocationReservationsQuery({
    variables: {
      input: {
        orderBy: OrderBy.Desc,
        page: currentPage,
        limit: pageSize,
        locationId: Number(locationId),
        ...filters,
      },
    },
    skip: !locationId,
    fetchPolicy: 'network-only',
  });

  const locations = data?.getLocationReservations?.items ?? [];

  const onFilter = ({
    createdById,
    fromDate,
    status,
    toDate,
  }: GetLocationReservationsFilter) => {
    const newFilter = {
      ...(toDate && {
        toDate: dayjs.utc(toDate).startOf('month').toISOString(),
      }),
      ...(fromDate && {
        fromDate: dayjs.utc(fromDate).startOf('month').toISOString(),
      }),
      ...(status && { status }),
      ...(createdById && { createdById: Number(createdById) }),
    };
    setCurrentPage(1);
    setFilters(newFilter);
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
        dataIndex: ['location', 'name'],
        key: 'locationName',
      },
      {
        title: 'Total Calculated Price',
        dataIndex: 'totalCalculatedPrice',
        key: 'totalCalculatedPrice',
        render: (price?: number) => `${(price ?? 0)?.toLocaleString()} VND`,
      },
      {
        title: 'Total Received Price',
        dataIndex: 'totalReceivedPrice',
        key: 'totalReceivedPrice',
        render: (price?: number) => `${(price ?? 0)?.toLocaleString()} VND`,
      },
      {
        title: 'Start Month',
        dataIndex: 'startDate',
        key: 'startDate',
        render: (startDate?: string) => dayjs(startDate)?.format('MM / YYYY'),
      },
      {
        title: 'In Charge Of',
        dataIndex: 'createdBy',
        key: 'createdBy',
        render: formatDisplayUser,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status?: LocationReservationStatus) => (
          <CustomTag
            content={status}
            className={getLocationReservationStatusColor(status)}
          />
        ),
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt?: string) =>
          formatDate(createdAt, 'hh:mm A, DD MMMM YYYY'),
      },
      {
        title: 'Updated At',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        render: (updatedAt?: string) =>
          formatDate(updatedAt, 'hh:mm A, DD MMMM YYYY'),
      },
    ],
    [],
  );

  return (
    <>
      <Filters onFilter={onFilter} locationId={locationId} />
      <div className="rounded-xl bg-[white] px-4">
        <div className="flex items-center justify-between py-4">
          <Typography className="text-xl font-semibold">
            Location Reservation List
          </Typography>
        </div>
        <Table
          rowKey="id"
          dataSource={locations}
          columns={COLUMNS}
          scroll={{ x: 'max-content' }}
          loading={loading}
          onChange={onChange}
          pagination={false}
        />
        <PaginationPanel
          current={currentPage ?? 1}
          pageSize={10}
          total={data?.getLocationReservations?.total ?? 0}
          setCurrentPage={setCurrentPage}
          className="flex justify-end py-6 pr-6"
          showQuickJumper
        />
      </div>
    </>
  );
}
export default List;
