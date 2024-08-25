import { SlGrid } from 'react-icons/sl';
import AdminHome from '../pages/dashboard/admin/AdminHome';
import { TSidebarItem } from '../types/route.type';
import { LiaCarSideSolid, LiaUsersCogSolid } from 'react-icons/lia';
import Booking from '../pages/dashboard/admin/Booking';
import { IoCarSportOutline } from 'react-icons/io5';
import ManageCar from '../pages/dashboard/admin/ManageCar';
import { IoIosAdd } from 'react-icons/io';
import AddCar from '../pages/dashboard/admin/AddCar';

export const adminPaths: TSidebarItem[] = [
  {
    icon: SlGrid,
    title: 'Overview',
    path: '',
    element: <AdminHome />,
  },
  {
    icon: LiaCarSideSolid,
    title: 'Manage Booking',
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
    icon: LiaUsersCogSolid,
    title: 'Manage User',
    path: 'manage-user',
    element: <Booking />,
  },
  {
    icon: IoIosAdd,
    title: 'Add New Car',
    path: 'add-car',
    element: <AddCar />,
  },
];
