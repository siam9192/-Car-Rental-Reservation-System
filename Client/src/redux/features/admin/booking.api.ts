
import { baseApi } from "../baseApi/base.api";

const bookingApi =  baseApi.injectEndpoints({
    endpoints: (builder) => ({
       approveBooking: builder.mutation({
        query: (id:string) => ({
          url: `bookings/${id}`,
          method: 'PUT',
          body:{status:'approved'}
        }),
        invalidatesTags:['booking','car']
      }),
      cancelBooking: builder.mutation({
        query: (id:string) => ({
          url: `bookings/${id}`,
          method: 'PUT',
          body:{status:'canceled'}
        }),
        invalidatesTags:['booking','car']
      }),
     
    }),
  });
  
  export const {useApproveBookingMutation,useCancelBookingMutation} = bookingApi;
  