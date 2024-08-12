import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addApi = createApi({
  reducerPath: 'addApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken; // Retrieve token from the state
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
    addItem: builder.mutation({
      query: (data) => ({
        url: 'user/update_profile',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = editApi;
