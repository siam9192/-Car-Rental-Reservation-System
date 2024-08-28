import { TBooking, TResponseRedux } from '../../../types';
import { baseApi } from '../baseApi/base.api';

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminOverviewData: builder.query({
      query: (id) => ({
        url: `admin/overview`,
        method: 'GET',
      }),
      transformResponse: (
        response: TResponseRedux<{
          users: number;
          booking: number;
          revenue: number;
          availableCars: number;
          recentBookings: TBooking[];
        }>
      ) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['booking', 'user', 'car'],
    }),
  }),
});

export const { useGetAdminOverviewDataQuery } = bookingApi;
