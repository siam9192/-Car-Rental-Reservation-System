
import MyProfile from './sections/MyProfile';
import EditProfile from './sections/EditProfile';
import RecentBooking from './sections/RecentBookings';
import { useGetMyBookingsQuery } from '../../../../redux/features/user/bookingManagement';

const UserOverview = () => {
  const {data} = useGetMyBookingsQuery(undefined)
  const bookings = data?.data?.slice(0,5)
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <MyProfile />
        <EditProfile />
      </div>
     <div className='mt-10'>
     <RecentBooking bookings={bookings||[]}/>
     </div>
    </div>
  );
};

export default UserOverview;
