import { TBooking, TResponseRedux } from '../../../types';
import { baseApi } from '../baseApi/base.api';

const bookingManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: (args) => ({
        url: 'bookings/my-bookings',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['booking'],
    }),
    getYetToPaymentBookings: builder.query({
      query: (args) => ({
        url: 'bookings/yet-to-payment',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['booking'],
    }),
  }),
});

export const { useGetMyBookingsQuery, useGetYetToPaymentBookingsQuery } =
  bookingManagementApi;
