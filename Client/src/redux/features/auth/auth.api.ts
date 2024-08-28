import { TUser } from '../../../types';
import { TResponseRedux } from '../../../types/global';
import { baseApi } from '../baseApi/base.api';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/signin',
        method: 'POST',
        body: userInfo,
      }),
    }),
    getMe: builder.query({
      query: (userInfo) => ({
        url: '/auth/get-me',
        method: 'GET',
      }),
      providesTags: ['profile'],
      transformResponse: (response: TResponseRedux<TUser>) => {
        return {
          data: response.data,
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: '/auth/update-user',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),
  }),
});

export const {
  useGetMeQuery,
  useSignupMutation,
  useLoginMutation,
  useUpdateProfileMutation,
} = authApi;
