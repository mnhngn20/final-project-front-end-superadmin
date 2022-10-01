import { Form, Input, InputNumber } from 'antd';
import UploadAvatar from '#/shared/components/commons/UploadAvatar';
import { User } from '#/generated/schemas';
import AddressSelector from '#/shared/components/commons/AddressSelector';

interface Props {
  initialValues?: User;
}

function LocationForm({ initialValues }: Props) {
  return (
    <>
      <div className="mb-8 flex justify-center">
        <Form.Item name="avatar" noStyle>
          <UploadAvatar src={initialValues?.avatar} size={120} />
        </Form.Item>
      </div>
      <Form.Item name="name" label="Location Name" rules={[{ required: true }]}>
        <Input
          type="text"
          placeholder="Enter location email"
          disabled={!!initialValues?.id}
        />
      </Form.Item>
      <Form.Item name="address" label="Location Address">
        <AddressSelector placeholder="Enter location address" />
      </Form.Item>
      <Form.Item name="images" label="Location Images">
        <Input placeholder="Enter Location Images" />
      </Form.Item>
      <Form.Item name="images" label="Location Images">
        <Input placeholder="Enter Location Images" />
      </Form.Item>
      <Form.Item name="numOfFloor">
        <InputNumber placeholder="Enter location total number of floor" />
      </Form.Item>
    </>
  );
}

export default LocationForm;
