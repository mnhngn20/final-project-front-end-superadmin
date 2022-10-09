import { Form, Input, Col } from 'antd';
import { GetLocationServicesFilter } from './List';
import FilterWrapper from '#/shared/components/commons/FilterWrapper';
import StatusSelector from '#/shared/components/selectors/StatusSelector';

interface Props {
  onFilter: (values: GetLocationServicesFilter) => void;
}

function Filter({ onFilter }: Props) {
  return (
    <FilterWrapper<GetLocationServicesFilter> onFilter={onFilter}>
      <Col xl={6} xs={12}>
        <Form.Item name="name">
          <Input placeholder="Search name" />
        </Form.Item>
      </Col>
      <Col xl={6} xs={12}>
        <Form.Item name="isActive">
          <StatusSelector placeholder="Search by status" />
        </Form.Item>
      </Col>
    </FilterWrapper>
  );
}

export default Filter;
