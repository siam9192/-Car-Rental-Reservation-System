import { useGetBookingsQuery } from '../../../../../redux/features/booking/booking.api';
import {
  useApproveBookingMutation,
  useCancelBookingMutation,
} from '../../../../../redux/features/admin/booking.api';
import AlertModal from '../../../../../compoments/modal/AleartModal';
import { toast } from 'sonner';

const ManageBookingTable = () => {
  const { data } = useGetBookingsQuery(undefined);
  const bookings = data?.data;

  const heads = [
    'Name',
    'Car',
    'Start Time',
    'Price',
    'Status',
    'Payment Status',
    'Action',
  ];
  const [approve] = useApproveBookingMutation();
  const [cancel] = useCancelBookingMutation();

  const handelApproveBooking = async(id: string) => {
   const res = await approve(id);
    
   if(!res?.error){
    toast.success('Booking Approved',{duration:3000})
   }
   else {
    toast.error('Something went wrong',{duration:3000})
   }
  };
  const handelCancelBooking = (id: string) => {
   return async()=>{
   const res = await cancel(id);

   if(!res?.error){
    toast.success('Booking canceled',{duration:3000})
   }
   else {
    toast.error('Something went wrong',{duration:3000})
   }
   }
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full min-h-[70vh] py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-slate-100">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  {heads.map((item, i) => (
                    <th key={i} scope="col" className="px-6 py-4 text-xl">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings?.map((booking, index) => {
                  return (
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {booking.user.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {booking.car.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {new Date(booking.startTime).toUTCString()}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        ${booking.pricePerHour}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {booking.status.toUpperCase()}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {booking.isPaid ? 'PAID' : 'UNPAID'}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                        {booking.status === 'pending' ? (
                          <>
                            <button
                              onClick={() => handelApproveBooking(booking._id)}
                              className="px-4 py-2 bg-secondary-color text-white"
                            >
                              Approve
                            </button>
                            <AlertModal message='Are you want to cancel this booking?' onConfirm={handelCancelBooking(booking._id)}>
                            <button
                              onClick={() => handelCancelBooking(booking._id)}
                              className="px-4 py-2 bg-red-500 text-white"
                            >
                              Cancel
                            </button>
                            </AlertModal>
                          </>
                        ) : (
                          <button
                            onClick={() => handelApproveBooking(booking._id)}
                            className="px-4 py-2 bg-secondary-color text-white"
                          >
                            Details
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBookingTable;
