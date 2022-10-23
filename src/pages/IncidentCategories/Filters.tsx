import { Form, Input, Col } from 'antd';
import { GetIncidentCategoriesFilter } from './List';
import FilterWrapper from '#/shared/components/commons/FilterWrapper';

interface Props {
  onFilter: (values: GetIncidentCategoriesFilter) => void;
}

function Filter({ onFilter }: Props) {
  return (
    <FilterWrapper<GetIncidentCategoriesFilter> onFilter={onFilter}>
      <Col xl={6} xs={12}>
        <Form.Item name="name">
          <Input placeholder="Search Name" />
        </Form.Item>
      </Col>
    </FilterWrapper>
  );
}

export default Filter;
