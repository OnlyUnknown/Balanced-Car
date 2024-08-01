import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const editApi = createApi({
  reducerPath: 'editApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken; // Retrieve token from local storage
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => 'users/tokens/info',
    }),
    updateProfile: builder.mutation({
      query: ({ patch }) => ({
        url: 'user/update_profile',
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = editApi;
