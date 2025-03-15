import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const removeApi = createApi({
  reducerPath: 'removeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addItem: builder.mutation({
      query: (data) => ({
        url: 'user/delete_resource',
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDetailsQuery } = removeApi;
