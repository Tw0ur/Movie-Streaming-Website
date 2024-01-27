import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const genresApi = createApi({
    reducerPath: 'genresApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=648eb568806f36444ae3b8d8401da7f1'}),
    endpoints: (build) => ({
        getGenres: build.query({
            query: () => ``,

        })
    })
})

export const {useGetGenresQuery} = genresApi;