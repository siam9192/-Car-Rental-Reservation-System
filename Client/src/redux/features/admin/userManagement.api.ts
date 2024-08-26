import { TResponseRedux, TUser } from "../../../types";
import { baseApi } from "../baseApi/base.api";

const userManagementApi =  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: (args) => ({
          url: `users`,
          method: 'GET'
        }),
        transformResponse: (response: TResponseRedux<TUser[]>) => {
          return {
            data: response.data,
          };
        },
        providesTags:['user']
      }),
      changeRole: builder.mutation({
        query: (data) => ({
          url: `users/change-role/${data.id}`,
          method: 'PATCH',
          body:data.payload
        }),
        invalidatesTags:['user']
      }),

     
    }),
  });
  
  export const {useGetUsersQuery,useChangeRoleMutation} = userManagementApi;
  