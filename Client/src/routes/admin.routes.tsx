import { SlGrid } from 'react-icons/sl';
import AdminHome from '../pages/dashboard/admin/AdminHome';
import { TSidebarItem } from '../types/route.type';
import { LiaCarSideSolid, LiaUsersCogSolid } from 'react-icons/lia';
import Booking from '../pages/dashboard/admin/booking/Booking';
import { IoCarSportOutline } from 'react-icons/io5';
import ManageCar from '../pages/dashboard/admin/ManageCar';
import { IoIosAdd } from 'react-icons/io';
import AddCar from '../pages/dashboard/admin/AddCar';
import ManageBooking from '../pages/dashboard/admin/ManageBooking/ManageBooking';
import ManageUser from '../pages/dashboard/admin/ManageUser/ManageUser';
import AdminOverview from '../pages/dashboard/admin/adminOverview/AdminOverview';
import ManageReturnCar from '../pages/dashboard/admin/manageReturnCar/ManageReturnCar';
import { BsArrowReturnRight } from 'react-icons/bs';

export const adminPaths: TSidebarItem[] = [
  {
    icon: SlGrid,
    title: 'Overview',
    path: '',
    element: <AdminOverview />,
  },
  {
    icon: LiaCarSideSolid,
    title: 'Booking',
    path: 'booking',
    element: <Booking />,
  },

  {
    icon: IoCarSportOutline,
    title: 'Manage Car',
    path: 'manage-car',
    element: <ManageCar />,
  },
  {
    icon: LiaCarSideSolid,
    title: 'Manage Booking',
    path: 'manage-booking',
    element: <ManageBooking />,
  },
  {
    icon: BsArrowReturnRight,
    title: 'Manage Return Car',
    path: 'manage-return-car',
    element: <ManageReturnCar />,
  },
  {
    icon: LiaUsersCogSolid,
    title: 'Manage User',
    path: 'manage-user',
    element: <ManageUser />,
  },
  {
    icon: IoIosAdd,
    title: 'Add New Car',
    path: 'add-car',
    element: <AddCar />,
  },
];
