import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import SignUp from '../pages/authentication/SignUp';
import Login from '../pages/authentication/Login';
import CarListing from '../pages/carListing/CarListing';
import CarDetails from '../pages/carDetails/CarDetails';
import DashboardLayout from '../compoments/layout/DashboardLayout';
import { adminPaths } from './admin.routes';
import { routeGenerator } from '../utils/fun';
import UpdateCar from '../pages/dashboard/admin/UpdateCar';
import PrivateRoute from '../ProtectedRoute/PrivateRoute';
import AuthRouteProtector from '../ProtectedRoute/AuthRouteProtector';
import { userPaths } from './user.routes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/car-listing',
        element: <CarListing />,
      },
      {
        path: '/car/:id',
        element: <CarDetails />,
      },
      {
        path: '/auth/sign-up',
        element: <AuthRouteProtector><SignUp /></AuthRouteProtector>,
      },
      {
        path: '/auth/login',
        element: <AuthRouteProtector><Login /></AuthRouteProtector>,
      },
    ],
  },
  {
    path: '/dashboard/admin',
    element: <PrivateRoute roles={["admin"]}><DashboardLayout /></PrivateRoute>,
    children: [
      ...routeGenerator(adminPaths),
      {
        path: 'update-car/:id',
        element: <UpdateCar />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute roles={['user']}><DashboardLayout /></PrivateRoute>,
    children: [
      ...routeGenerator(userPaths),

    ],
  },
]);

export default routes;
