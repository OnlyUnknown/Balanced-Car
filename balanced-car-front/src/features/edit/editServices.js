import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const editApi = createApi({
  reducerPath: 'editApi',
  // Set the baseUrl for every endpoint below
  baseQuery: fetchBaseQuery({  // base url of backend API
    baseUrl: 'http://localhost:3001/',
    // prepareHeaders is used to configure the header of every request and gives
    // access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      const token = getState().edit.userToken;
      if (token) {
        // include token in req header
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur
      query: `/users/tokens/info`,
      
    }),
      
    updateProfile: builder.mutation({
      query: ({ patch }) => ({
        url: `/user/update_profile`,
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

export const { useUpdateProfileQuery } = editApi;