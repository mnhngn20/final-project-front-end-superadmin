import { loadable } from '#/shared/utils/loadable';
import { useRoutes } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(utc);

const Login = loadable(import('../pages/Login'));
const ForgotPassword = loadable(import('../pages/ForgotPassword'));
const ResetPassword = loadable(import('../pages/ResetPassword'));

const App = () => {
  const routes = useRoutes([
    {
      element: (
        <GuardRoute>
          <Login />
        </GuardRoute>
      ),
      path: 'login',
    },
    {
      element: (
        <GuardRoute>
          <ForgotPassword />
        </GuardRoute>
      ),
      path: '/forgot-password',
    },
    {
      element: (
        <GuardRoute>
          <ResetPassword />
        </GuardRoute>
      ),
      path: '/reset-password',
    },
    {
      element: (
        <GuardRoute isPrivate>
          <PrivateRoute />
        </GuardRoute>
      ),
      path: '/*',
    },
  ]);

  return routes;
};

export default App;
