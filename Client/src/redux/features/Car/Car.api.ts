import { TCar } from '../../../types';
import { TParam, TResponseRedux } from '../../../types/global';
import { baseApi } from '../baseApi/base.api';

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (params: TParam[] | undefined) => {
        if (typeof params === undefined) {
          params = [];
        }

        const searchParam = new URLSearchParams();
        params?.forEach((item) => {
          searchParam.append(item.name, item.value);
        });

        return {
          url: `cars?${searchParam.toString()}`,
          method: 'GET',
        };
      },
      transformResponse: (response: TResponseRedux<TCar[]>) => {
        return {
          data: response.data
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
