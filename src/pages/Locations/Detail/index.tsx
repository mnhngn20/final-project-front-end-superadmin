import {
  UpsertLocationInput,
  useGetLocationQuery,
  useUpsertLocationMutation,
} from '#/generated/schemas';
import { FormModal } from '#/shared/components/commons/FormModal';
import ImageCarousel from '#/shared/components/commons/ImageCarousel';
import DetailLayout from '#/shared/components/layout/DetailLayout';
import { showError, showSuccess } from '#/shared/utils/notification';
import { Coordinates } from '#/shared/utils/type';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationForm from '../Form';
import SideContent from './SideContent';

function Detail() {
  const { id } = useParams();
  const [editModalVisible, setEditModalVisible] = useState(false);

  const { data, loading, refetch } = useGetLocationQuery({
    variables: {
      id: Number(id),
    },
    skip: !id,
    onError: showError,
  });
  const location = data?.getLocation?.location;

  const [upsertLocation, { loading: upsertLocationLoading }] =
    useUpsertLocationMutation({
      onCompleted() {
        showSuccess('Updated location successfully!');
        setEditModalVisible(false);
        refetch();
      },
      onError: showError,
    });

  const onSubmit = ({
    coordinates,
    contactInformations,
    ...values
  }: UpsertLocationInput & {
    coordinates: Coordinates;
  }) => {
    upsertLocation({
      variables: {
        input: {
          ...values,
          contactInformations: contactInformations?.map(item => ({
            ...item,
            ...(item?.id && { id: Number(item?.id) }),
          })),
          lat: coordinates?.lat,
          long: coordinates?.long,
        },
      },
    });
  };

  return (
    <>
      <DetailLayout
        loading={loading}
        title="Location Detail"
        mainContent={<SideContent location={location ?? {}} />}
        sideContent={
          <ImageCarousel
            images={location?.images ? location?.images?.split(',') : []}
          />
        }
        onEdit={() => setEditModalVisible(true)}
      />
      <FormModal<
        UpsertLocationInput & {
          coordinates: Coordinates;
        }
      >
        loading={upsertLocationLoading}
        onSubmit={onSubmit}
        name="Location"
        onClose={() => setEditModalVisible(false)}
        selectedItem={editModalVisible ? { ...location } : undefined}
        initialValues={{ ...location }}
        width="1000"
      >
        <LocationForm />
      </FormModal>
    </>
  );
}

export default Detail;
