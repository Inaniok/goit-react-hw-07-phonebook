import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://646d1f6c7b42c06c3b2c9690.mockapi.io/api/v1',
    
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    fetchAddContact: builder.mutation({
      query: contact => ({ url: `/contacts`, method: 'POST', body: contact }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchAllContactsQuery,
  useDeleteContactMutation,
  useFetchAddContactMutation,
} = phoneBookApi;