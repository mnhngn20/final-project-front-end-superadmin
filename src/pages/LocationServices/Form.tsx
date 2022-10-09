import { Form, Input, Switch } from 'antd';
import { User } from '#/generated/schemas';

interface Props {
  initialValues?: User;
}

function LocationForm({}: Props) {
  return (
    <>
      <Form.Item name="name" label="Service Name" rules={[{ required: true }]}>
        <Input placeholder="Enter location service name" />
      </Form.Item>
      <Form.Item name="description" label="Service Description">
        <Input.TextArea rows={3} placeholder="Enter description" />
      </Form.Item>
      <Form.Item valuePropName="checked" label="Status" name="isActive">
        <Switch defaultChecked />
      </Form.Item>
    </>
  );
}

export default LocationForm;
