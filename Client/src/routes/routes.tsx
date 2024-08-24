import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import SignUp from '../pages/authentication/SignUp';
import Login from '../pages/authentication/Login';
import CarListing from '../pages/carListing/CarListing';

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
    ],
  },
  {
    path: '/auth/sign-up',
    element: <SignUp />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
]);

export default routes;
