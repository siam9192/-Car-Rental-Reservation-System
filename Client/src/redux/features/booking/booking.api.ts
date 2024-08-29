import { TBooking } from '../../../types/booking.type';
import { TParam, TResponseRedux } from '../../../types/global';
import { baseApi } from '../baseApi/base.api';

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: 'bookings',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['booking'],
    }),
    getBookings: builder.query({
      query: (params: TParam[] | undefined) => {
        if (typeof params === undefined) {
          params = [];
        }

        const searchParam = new URLSearchParams();
        params?.forEach((item) => {
          searchParam.append(item.name, item.value);
        });

        return {
          url: `bookings?${searchParam.toString()}`,
          method: 'GET',
        };
      },
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['booking'],
    }),

    getBooking: builder.query({
      query: (id) => ({
        url: `bookings/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBooking>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['car'],
    }),
    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/cancel-booking/${id}`,
        method: 'POST',
      }),
      transformResponse: (response: TResponseRedux<TBooking>) => {
        return {
          data: response.data,
        };
      },
     invalidatesTags:['booking']
    }),
    confirmBooking: builder.mutation({
      query: (id) => ({
        url: `bookings/confirm/${id}`,
        method: 'POST',
      }),
      transformResponse: (response: TResponseRedux<TBooking>) => {
        return {
          data: response.data,
        };
      },
     invalidatesTags:['booking']
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useGetBookingsQuery,
  useConfirmBookingMutation,
  useCancelBookingMutation
} = bookingApi;
