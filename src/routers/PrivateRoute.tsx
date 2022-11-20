import { useNavigate, useRoutes } from 'react-router-dom';
import PrivateLayout from '#/shared/components/layout/PrivateLayout';
import { loadable } from '#/shared/utils/loadable';
import { useMeQuery } from '#/generated/schemas';
import { clearToken } from '#/shared/utils/token';
import { userVar } from '#/graphql/cache';
import { showError } from '#/shared/utils/notification';

const Users = loadable(import('#/pages/Users'));
const UserDetail = loadable(import('#/pages/Users/Detail'));
const Profile = loadable(import('#/pages/Profile'));
const Locations = loadable(import('#/pages/Locations'));
const LocationDetail = loadable(import('#/pages/Locations/Detail'));
const AmenityTypes = loadable(import('#/pages/AmenityType'));
const LocationServices = loadable(import('#/pages/LocationServices'));
const IncidentCategories = loadable(import('#/pages/IncidentCategories'));

function PrivateRoute() {
  const navigate = useNavigate();
  const { data } = useMeQuery({
    onCompleted(data) {
      userVar(data?.me?.user ?? {});
    },
    onError(error) {
      showError(error);
      logout();
    },
  });

  const logout = () => {
    clearToken();
    navigate('/login');
  };

  const routes = useRoutes([
    { element: <Profile />, path: '/profile' },
    {
      path: '/users',
      children: [
        {
          index: true,
          element: <Users />,
        },
        {
          path: ':id',
          element: <UserDetail />,
        },
      ],
    },
    {
      path: '/location-services',
      children: [
        {
          index: true,
          element: <LocationServices />,
        },
      ],
    },
    {
      path: '/incident-categories',
      children: [
        {
          index: true,
          element: <IncidentCategories />,
        },
      ],
    },
    {
      path: '/amenity-types',
      children: [
        {
          index: true,
          element: <AmenityTypes />,
        },
      ],
    },
    {
      path: '/locations',
      children: [
        { index: true, element: <Locations /> },
        { path: ':id', element: <LocationDetail /> },
      ],
    },
    { element: <Users />, path: '/' },
  ]);

  return (
    <PrivateLayout user={data?.me?.user ?? {}} logout={logout}>
      {routes}
    </PrivateLayout>
  );
}

export default PrivateRoute;
