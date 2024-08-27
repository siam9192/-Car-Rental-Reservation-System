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
    getMyBookings: builder.query({
      query: (args) => ({
        url: 'bookings/my-booking',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['booking'],
    }),

    getBooking: builder.query({
      query: (id) => ({
        url: `cars/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBooking>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['car'],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useGetBookingsQuery,
} = bookingApi;
