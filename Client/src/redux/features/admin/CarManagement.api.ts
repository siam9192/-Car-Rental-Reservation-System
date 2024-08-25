import { baseApi } from "../baseApi/base.api";

const carManageMentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       addCar: builder.mutation({
          query: (data) => ({
            url: 'cars',
            method: 'POST',
            body: data,
          }),
        }),
       
      }),
})


export const {useAddCarMutation} = carManageMentApi