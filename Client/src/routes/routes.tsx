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
        element: <SignUp />,
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
]);

export default routes;
