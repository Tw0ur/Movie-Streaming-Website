import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://api.themoviedb.org/3/'}),
    endpoints: (build) => ({
        getMovie: build.query({
            query: (link: string) => `${link}api_key=648eb568806f36444ae3b8d8401da7f1`,

        })
    })
})

export const {useGetMovieQuery} = movieApi;