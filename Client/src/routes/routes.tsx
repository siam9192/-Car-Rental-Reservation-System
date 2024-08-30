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
import UpdateCar from '../pages/dashboard/admin/updateCar/UpdateCar';
import PrivateRoute from '../ProtectedRoute/PrivateRoute';
import AuthRouteProtector from '../ProtectedRoute/AuthRouteProtector';
import { userPaths } from './user.routes';
import TermsAndConditions from '../pages/termsAndConditions/TermsAndConditions';
import NotFound from '../pages/error/NotFound';
import About from '../pages/about/About';
import PaymentLoading from '../pages/paymentLoading.tsx/PaymentLoading';
import BookingConfirm from '../pages/bookingConfirm/BookingConfirm';
import Booking from '../pages/booking/Booking';
import ForgetPassword from '../pages/forgetPassword/ForgetPassword';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
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
        path: '/bookings',
        element: <Booking/>,
      },
      {
        path: '/car/:id',
        element: <CarDetails />,
      },
      {
        path: '/about-us',
        element: <About />,
      },
      {
        path: '/payment-success',
        element: <About />,
      },
      {
        path: '/payment-loading',
        element: <PaymentLoading />,
      },
      {
        path: '/auth/sign-up',
        element: (
          <AuthRouteProtector>
            <SignUp />
          </AuthRouteProtector>
        ),
      },
      {
        path: '/auth/login',
        element: (
          <AuthRouteProtector>
            <Login />
          </AuthRouteProtector>
        ),
      },
      {
        path: '/terms&conditions',
        element: (
          <AuthRouteProtector>
            <TermsAndConditions />
          </AuthRouteProtector>
        ),
      },
      {
        path:'/booking-confirm/:id',
        element:<BookingConfirm/>
      },
      {
        path:'/auth/forget-password',
        element:<ForgetPassword/>
      }
    ],
  },
  {
    path: '/dashboard/admin',
    element: (
      <PrivateRoute roles={['admin']}>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      ...routeGenerator(adminPaths),
      {
        path: 'update-car/:id',
        element: <UpdateCar />,
      }
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute roles={['user']}>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [...routeGenerator(userPaths)],
  },
]);

export default routes;
