import { useGetMyBookingsQuery } from '../../../../../redux/features/user/bookingManagement';

const ManageBookingTable = () => {
  const { data } = useGetMyBookingsQuery(undefined);
  const bookings = data?.data;

  const heads = [
    'Id',
    'Name',
    'Car',
    'Start Time',
    'Price',
    'Status',
    'Payment Status',
    'Action',
  ];
  //   const [approve] = useApproveBookingMutation();
  //   const [cancel] = useCancelBookingMutation();

  const handelCancelBooking = (id: string) => {
    // cancel(id);
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
                        #{booking._id}
                      </td>
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
                      <td className="whitespace-nowrap px-6 py-4 space-x-2 ">
                        {booking.status === 'pending' ? (
                          <>
                            <button
                              onClick={() => handelCancelBooking(booking._id)}
                              className="px-4 py-2 bg-red-500 text-white"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button className="px-4 py-2 bg-secondary-color text-white">
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
