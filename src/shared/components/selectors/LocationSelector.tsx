import InfinitySelect, { InfinitySelectProps } from '../commons/InfinitySelect';
import {
  Location,
  GetLocationsDocument,
  GetLocationsQuery,
  GetLocationsQueryVariables,
} from '#/generated/schemas';
import { DeepPartial } from '#/shared/utils/type';

function LocationSelector({
  ...rest
}: InfinitySelectProps<DeepPartial<Location>, GetLocationsQueryVariables>) {
  return (
    <InfinitySelect<
      GetLocationsQuery,
      GetLocationsQueryVariables,
      DeepPartial<Location>
    >
      formatData={data => data?.getLocations}
      query={GetLocationsDocument}
      convertDataToOptions={locations =>
        locations.map(location => ({
          label: location.name,
          value: location.id,
        }))
      }
      variables={{ input: { isActive: true } }}
      className="w-full"
      fetchPolicy="network-only"
      {...rest}
    />
  );
}

export default LocationSelector;
