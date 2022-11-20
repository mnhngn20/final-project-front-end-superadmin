import { Form, Col } from 'antd';
import { GetLocationReservationsFilter } from './List';
import FilterWrapper from '#/shared/components/commons/FilterWrapper';
import UserSelector from '#/shared/components/selectors/UserSelector';
import { UserRole } from '#/generated/schemas';
import LocationReservationStatusSelector from '#/shared/components/selectors/LocationReservationStatusSelector';
import { DatePicker } from '#/shared/components/commons/DatePicker';

interface Props {
  onFilter: (values: GetLocationReservationsFilter) => void;
  locationId?: string;
}

function Filter({ onFilter, locationId }: Props) {
  return (
    <FilterWrapper<GetLocationReservationsFilter> onFilter={onFilter}>
      <Col xl={6} xs={12}>
        <Form.Item name="createdById">
          <UserSelector
            placeholder="Search employee in charge"
            variables={{
              input: {
                locationId: Number(locationId),
                role: UserRole.Admin,
                isActive: true,
              },
            }}
          />
        </Form.Item>
      </Col>
      <Col xl={6} xs={12}>
        <Form.Item name="status">
          <LocationReservationStatusSelector placeholder="Search by status" />
        </Form.Item>
      </Col>
      <Col xl={6} xs={12}>
        <Form.Item name="fromDate">
          <DatePicker
            placeholder="From Date"
            picker="month"
            className="w-full"
          />
        </Form.Item>
      </Col>
      <Col xl={6} xs={12}>
        <Form.Item name="toDate">
          <DatePicker placeholder="To Date" picker="month" className="w-full" />
        </Form.Item>
      </Col>
    </FilterWrapper>
  );
}

export default Filter;
