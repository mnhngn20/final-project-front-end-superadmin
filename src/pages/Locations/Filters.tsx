import { Form, Input, Col } from 'antd';
import { GetLocationsFilter } from './List';
import StatusSelector from '#/shared/components/selectors/StatusSelector';
import FilterWrapper from '#/shared/components/commons/FilterWrapper';

interface Props {
  onFilter: (values: GetLocationsFilter) => void;
}

function Filter({ onFilter }: Props) {
  return (
    <FilterWrapper<GetLocationsFilter> onFilter={onFilter}>
      <Col xl={6} xs={12}>
        <Form.Item name="name">
          <Input placeholder="Search Name" />
        </Form.Item>
      </Col>
      <Col xl={6} xs={12}>
        <Form.Item name="address">
          <Input placeholder="Search address" />
        </Form.Item>
      </Col>
      <Col xl={6} xs={12}>
        <Form.Item name="isActive">
          <StatusSelector placeholder="Filter by status" />
        </Form.Item>
      </Col>
    </FilterWrapper>
  );
}

export default Filter;
