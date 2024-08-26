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
        method: 'GET'
      }),
      transformResponse: (response: TResponseRedux<TUser>) => {
        return {
          data: response.data,
        };
      },
    }),
  }),
});

export const {useGetMeQuery,useSignupMutation, useLoginMutation } = authApi;
