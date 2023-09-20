// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  
  reducerPath: 'api',
 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
 
  endpoints: builder => ({
    
    getNewses: builder.query({
      query: () => '/news'
    })
  })
})


export const { useGetNewsesQuery } = apiSlice