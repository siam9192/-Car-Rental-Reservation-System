import { baseApi } from '../baseApi/base.api';

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCar: builder.mutation({
      query: (data) => ({
        url: 'cars',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['car'],
    }),
    updateCar: builder.mutation({
      query: (data) => ({
        url: `cars/${data.id}`,
        method: 'PUT',
        body: data.payload,
      }),
      invalidatesTags: ['car'],
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `cars/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['car'],
    }),
  }),
});

export const { useAddCarMutation, useUpdateCarMutation,useDeleteCarMutation } = carManagementApi;
