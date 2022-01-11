import {configureStore} from '@reduxjs/toolkit';
import {reducers} from './reducers/combinesReducer';

export const store = configureStore({
    reducer: reducers
});