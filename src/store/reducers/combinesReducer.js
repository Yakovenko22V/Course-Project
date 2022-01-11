import { combineReducers } from "@reduxjs/toolkit";
import { reducer as reducerForMainPage } from './statesReducer/reducerStates';

export const reducers = combineReducers({
    reducerForMainPage
});