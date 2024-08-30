import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';

// https://car-rental-reservation-system-ocq6vn0mq-siam-hasans-projects.vercel.app/api/v1
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://car-rental-reservation-system-kl9mvup0r-siam-hasans-projects.vercel.app/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result: any = await baseQuery(args, api, extraOptions);

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['car', 'booking', 'user', 'profile'],
  endpoints: () => ({}),
});
