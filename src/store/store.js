import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers/combinesReducer';
import { setFavorMoviesId } from '../middleware/setFavorMoviesId';

export const store = configureStore({
    reducer: reducers,
    middleware:  [setFavorMoviesId]
});