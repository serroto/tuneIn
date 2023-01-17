import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '1d60ee2830msh21f3b1cfcae2970p13815fjsn51b467f2d672');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query:() => '/charts/world'}),
    }),
}); 

export const{
    useGetTopChartsQuery,
} = shazamCoreApi;