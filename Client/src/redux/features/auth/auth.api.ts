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
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
