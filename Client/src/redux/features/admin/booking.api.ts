import { TBooking, TResponseRedux } from '../../../types';
import { baseApi } from '../baseApi/base.api';

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReturnableBookings: builder.query({
      query: (id) => ({
        url: `bookings/returnable`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['booking'],
    }),
    approveBooking: builder.mutation({
      query: (id: string) => ({
        url: `bookings/${id}`,
        method: 'PUT',
        body: { status: 'approved' },
      }),
      invalidatesTags: ['booking', 'car'],
    }),
    cancelBooking: builder.mutation({
      query: (id: string) => ({
        url: `bookings/${id}`,
        method: 'PUT',
        body: { status: 'canceled' },
      }),
      invalidatesTags: ['booking', 'car'],
    }),
    returnCar: builder.mutation({
      query: (data) => ({
        url: `bookings/return`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['booking', 'car'],
    }),
  }),
});

export const {
  useApproveBookingMutation,
  useCancelBookingMutation,
  useGetReturnableBookingsQuery,
  useReturnCarMutation,
} = bookingApi;
