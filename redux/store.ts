import {configureStore} from '@reduxjs/toolkit';
import {movieApi} from './moviesApi'
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {genresApi} from './genresApi'
import users from "./users.ts";

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        [genresApi.reducerPath]: genresApi.reducer,
        user: users,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware, genresApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;