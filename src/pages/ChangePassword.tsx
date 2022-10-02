import { Form, Input, Modal } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import {
  useChangePasswordMutation,
  ChangePasswordInput,
} from '#/generated/schemas';
import { showError, showSuccess } from '#/shared/utils/notification';

interface ChangePasswordProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible?: boolean;
}

function ChangePassword({ setVisible, visible }: ChangePasswordProps) {
  const [form] = Form.useForm();
  const { t } = useTypeSafeTranslation();

  const [changePassword] = useChangePasswordMutation({
    onCompleted() {
      showSuccess('Change password successfully!');
      setVisible(false);
      form.resetFields();
    },
    onError: showError,
  });

  const handleSubmit = ({ oldPassword, password }: ChangePasswordInput) => {
    changePassword({
      variables: {
        input: {
          oldPassword,
          password,
        },
      },
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Modal
        title={t('changePassword.title')}
        visible={visible}
        closable={false}
        okText={t('button.save')}
        onOk={form.submit}
        onCancel={handleCancel}
        width={650}
      >
        <Form
          form={form}
          className="flex flex-col gap-8 px-[1rem]"
          layout="vertical"
          scrollToFirstError
          onFinish={handleSubmit}
        >
          <div className="flex w-full flex-col">
            <Form.Item
              name="oldPassword"
              label={t('commonFields.oldPassword')}
              rules={[
                {
                  message: t('confirm.password'),
                  required: true,
                },
              ]}
            >
              <Input.Password
                placeholder={t('placeholder.enterOldPassword')}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="New Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder="Enter your new password" />
            </Form.Item>
            <Form.Item
              name="confirmNewPassword"
              label={t('commonFields.comfirmPassword')}
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  message: t('confirm.password'),
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(t('confirm.passwordNotMatch')),
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder={t('commonFields.confirmNewPassword')}
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default ChangePassword;
