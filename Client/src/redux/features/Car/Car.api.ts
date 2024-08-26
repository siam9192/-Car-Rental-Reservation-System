import { TCar } from '../../../types';
import { TResponseRedux } from '../../../types/global';
import { baseApi } from '../baseApi/base.api';

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (data) => ({
        url: 'cars',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TCar[]>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['car'],
    }),
    getCar: builder.query({
      query: (id) => ({
        url: `cars/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TCar>) => {
        return {
          data: response.data,
        };
      },
      providesTags: ['car'],
    }),
  }),
});

export const { useGetCarsQuery, useGetCarQuery } = carApi;
