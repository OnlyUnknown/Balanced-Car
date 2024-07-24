import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const editApi = createApi({
  // Set the baseUrl for every endpoint below
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1' }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur
      query: `/users/tokens/info`,
    }),
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.userToken;
        if (token) {
          // include token in req header
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
      
    updateProfile: builder.mutation({
      query: ({ patch }) => ({
        url: `/users/update_profile`,
        // When performing a mutation, you typically use a method of
        // PATCH/PUT/POST/DELETE for REST endpoints
        method: 'PATCH',
        // fetchBaseQuery automatically adds `content-type: application/json` to
        // the Headers and calls `JSON.stringify(patch)`
        body: patch,
      }),
    }),
  }),
})