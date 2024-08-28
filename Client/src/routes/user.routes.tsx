import { SlGrid } from 'react-icons/sl';
import { TSidebarItem } from '../types';
import UserOverview from '../pages/dashboard/user/userOverview/UserOverview';
import { LiaCarSideSolid } from 'react-icons/lia';
import ManageBooking from '../pages/dashboard/user/manageBooking/ManageBooking';
import Booking from '../pages/dashboard/admin/booking/Booking';
import { MdPayments } from 'react-icons/md';
import ManagePayment from '../pages/dashboard/user/mangePayment/ManagePayment';

export const userPaths: TSidebarItem[] = [
  {
    icon: SlGrid,
    title: 'Overview',
    path: '',
    element: <UserOverview />,
  },
  {
    icon: LiaCarSideSolid,
    title: 'Booking',
    path: 'booking',
    element: <Booking />,
  },

  {
    icon: LiaCarSideSolid,
    title: 'Manage Booking',
    path: 'manage-booking',
    element: <ManageBooking />,
  },
  {
    icon: MdPayments,
    title: 'Yet to Payment',
    path: 'manage-payments',
    element: <ManagePayment />,
  },
];
