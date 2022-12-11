import {
  BirthdaySVG,
  CalendarSVG,
  CallSVG,
  CardSVG,
  EditSVG,
  LocationSVG,
  MapSVG,
  SmsSVG,
  StarSVG,
  TagSVG,
} from '#/assets/svgs';
import {
  UpdateUserInput,
  useGetUserQuery,
  useUpdateUserMutation,
} from '#/generated/schemas';
import DetailItem from '#/shared/components/commons/DetailItem';
import { FormModal } from '#/shared/components/commons/FormModal';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { formatDate } from '#/shared/utils/date';
import { showError, showSuccess } from '#/shared/utils/notification';
import { Avatar, Button, Skeleton, Typography } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../Form';
import DefaultAvatar from '#/assets/images/avatar.png';

function Detail() {
  const { id } = useParams();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const { t } = useTypeSafeTranslation();

  const { data, loading, refetch } = useGetUserQuery({
    variables: {
      id: Number(id),
    },
    skip: !id,
    onError: showError,
  });
  const user = data?.getUser?.user;

  const [updateUser, { loading: updateUserLoading }] = useUpdateUserMutation({
    onCompleted() {
      showSuccess('Updated user successfully!');
      setEditModalVisible(false);
      refetch();
    },
    onError: showError,
  });

  const onSubmit = ({
    dateOfBirth,
    id,
    address,
    avatar,
    identityNumber,
    name,
    phoneNumber,
    roomId,
  }: UpdateUserInput) => {
    updateUser({
      variables: {
        input: {
          id,
          address,
          avatar,
          identityNumber,
          name,
          phoneNumber,
          roomId,
          ...(dateOfBirth && {
            dateOfBirth: dayjs.utc(dateOfBirth).startOf('date').toISOString(),
          }),
        },
      },
    });
  };

  return (
    <Skeleton loading={loading}>
      <div className="relative rounded-xl bg-[white] shadow-card">
        <Typography className="absolute top-0 right-0 m-4">
          <Button
            onClick={() => setEditModalVisible(true)}
            type="primary"
            icon={<EditSVG width={18} height={18} className="anticon" />}
          >
            Edit Profile
          </Button>
        </Typography>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 xlg:col-span-12">
            <div className="flex items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center gap-4 rounded-tl-xl rounded-bl-xl bg-grey-primary py-[3.15rem] px-20 xlg:w-full xlg:rounded-tr-xl xlg:rounded-bl-none">
                <Avatar size={200} src={user?.avatar ?? DefaultAvatar} />
                <Typography.Title level={3} className="text-center">
                  {user?.name}
                </Typography.Title>
              </div>
              <Typography className="absolute top-0 left-0 m-4 flex h-8 items-center rounded-full bg-info-light px-3">
                <Typography.Title level={5} className="my-1">
                  <StarSVG width={16} height={16} className="text-info" />
                </Typography.Title>
                <Typography.Text className="ml-2 text-sm text-info">
                  {user?.role}
                </Typography.Text>
              </Typography>
            </div>
          </div>
          <div className="col-span-8 xlg:col-span-12">
            <div className="flex flex-col justify-center p-8">
              <Typography.Title level={3} className="font-semibold">
                {t('profiles.title')}
              </Typography.Title>
              <div className="grid grid-cols-2">
                <DetailItem
                  icon={SmsSVG}
                  value={user?.email}
                  className="grid-cols-1"
                />
                <DetailItem
                  icon={CallSVG}
                  value={user?.phoneNumber}
                  className="grid-cols-1"
                />
                <DetailItem icon={LocationSVG} value={user?.address} />
                <DetailItem icon={CalendarSVG} value={user?.createdAt} />
                <DetailItem icon={TagSVG} value={t('profiles.tag')} />
                <DetailItem icon={CardSVG} value={user?.identityNumber} />
                <DetailItem icon={MapSVG} value={user?.location?.name} />
                <DetailItem
                  icon={BirthdaySVG}
                  value={formatDate(user?.dateOfBirth, 'DD/MM/YYYY')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModal<UpdateUserInput>
        loading={updateUserLoading}
        onSubmit={onSubmit}
        name="Location"
        onClose={() => setEditModalVisible(false)}
        selectedItem={
          editModalVisible
            ? {
                ...user,
                ...(user?.dateOfBirth && {
                  dateOfBirth: dayjs(user?.dateOfBirth),
                }),
              }
            : undefined
        }
        initialValues={{
          ...user,
          ...(user?.dateOfBirth && {
            dateOfBirth: dayjs(user?.dateOfBirth),
          }),
        }}
        width="1000"
      >
        <UserForm />
      </FormModal>
    </Skeleton>
  );
}

export default Detail;
