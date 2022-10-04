import { Typography } from 'antd';
import DetailItem from '../../shared/components/commons/DetailItem';
import {
  BirthdaySVG,
  CalendarSVG,
  CallSVG,
  CardSVG,
  LocationSVG,
  MapSVG,
  SmsSVG,
  TagSVG,
} from '#/assets/svgs';
import useTypeSafeTranslation from '#/shared/hooks/useTypeSafeTranslation';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '#/graphql/cache';
import { formatDate } from '#/shared/utils/date';

const { Title } = Typography;

function ProfileContent() {
  const { t } = useTypeSafeTranslation();
  const user = useReactiveVar(userVar);

  return (
    <div className="flex flex-col justify-center p-8">
      <Title level={3} className="font-semibold">
        {t('profiles.title')}
      </Title>
      <div className="grid grid-cols-2">
        <DetailItem icon={SmsSVG} value={user?.email} className="grid-cols-1" />
        <DetailItem
          icon={CallSVG}
          value={user?.phoneNumber}
          className="grid-cols-1"
        />
        <DetailItem icon={LocationSVG} value={user?.address} />
        <DetailItem icon={CalendarSVG} value={user?.createdAt} />
        <DetailItem icon={TagSVG} value={t('profiles.tag')} />
        <DetailItem icon={CardSVG} value={user.identityNumber} />
        <DetailItem icon={MapSVG} value={user?.location?.name} />
        <DetailItem
          icon={BirthdaySVG}
          value={formatDate(user.dateOfBirth, 'DD/MM/YYYY')}
        />
      </div>
    </div>
  );
}

export default ProfileContent;
