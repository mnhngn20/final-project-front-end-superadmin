import { Form, Input, Switch } from 'antd';
import { User } from '#/generated/schemas';
import UploadImage from '#/shared/components/commons/UploadImage';

interface Props {
  initialValues?: User;
}

function IncidentCategoryForm({}: Props) {
  return (
    <>
      <Form.Item
        name="icon"
        label="Incident Category Image"
        valuePropName="src"
      >
        <UploadImage />
      </Form.Item>
      <Form.Item
        name="name"
        label="Incident category Name"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter Incident category type name" />
      </Form.Item>
      <Form.Item name="description" label="Location Description">
        <Input.TextArea rows={3} placeholder="Enter location email" />
      </Form.Item>
      <Form.Item valuePropName="checked" label="Status" name="isActive">
        <Switch defaultChecked />
      </Form.Item>
    </>
  );
}

export default IncidentCategoryForm;
