import { useNavigate, useRoutes } from 'react-router-dom';
import PrivateLayout from '#/shared/components/layout/PrivateLayout';
import { loadable } from '#/shared/utils/loadable';
import { useMeQuery } from '#/generated/schemas';
import { clearToken } from '#/shared/utils/token';
import { userVar } from '#/graphql/cache';
import { showError } from '#/shared/utils/notification';

const Dashboard = loadable(import('#/pages/Dashboard'));
const Users = loadable(import('#/pages/Users'));
const Profile = loadable(import('#/pages/Profile'));
const Locations = loadable(import('#/pages/Locations'));

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
    { element: <Users />, path: '/users' },
    { element: <Locations />, path: '/locations' },
    { element: <Dashboard />, path: '/' },
  ]);

  return (
    <PrivateLayout user={data?.me?.user ?? {}} logout={logout}>
      {routes}
    </PrivateLayout>
  );
}

export default PrivateRoute;
