import { createSlice } from '@reduxjs/toolkit';

const reducerStates = {
    name: 'reducerStates',
    initialState: {
        mainPage: null,
        zhanr: [],
        numberPage: 1,
        pagesCount: null,
        inputValue: '',
        selectedMovie: null,
        recommendedMovies: null,
        favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) || [],
        favoriteMoviesArr: [],
        topRatedMovies: null
    },
    reducers: {
        setMainPage: (state, action) => {
            state.mainPage = action.payload;
        },
        setZhanr: (state, action) => {
            state.zhanr = action.payload
        },
        setNumberPage: (state, action) => {
            state.numberPage = action.payload
        },
        setPagesCount: (state, action) => {
            state.pagesCount = action.payload
        },
        setFilteredByInput: (state, action) => {
            state.inputValue = action.payload
        },
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
        setRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload;
        },
        setFavoriteMovies: (state, action) => {
            let index = state.favoriteMovies.indexOf(action.payload);
            (index === -1) ? state.favoriteMovies.push(action.payload) : state.favoriteMovies.splice(index, 1);
            localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
            if (state.favoriteMoviesArr.some(fl => fl.id === action.payload)) {
                state.favoriteMoviesArr = state.favoriteMoviesArr.filter(it => it.id !== action.payload)
            } 
        },
        setFavoriteMoviesArr: (state, action) => {
            if (!state.favoriteMoviesArr.some(fl => fl.id === action.payload.id)) {
                state.favoriteMoviesArr.push(action.payload)
            }   
        },
        setSearchFavorFilm: (state, action) => {
            state.favoriteMoviesArr = action.payload
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        }
    },
};

export const { actions, reducer } = createSlice(reducerStates);