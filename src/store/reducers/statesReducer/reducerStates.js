import { createSlice } from '@reduxjs/toolkit';

const reducerStates = {
    name: 'reducerStates',
    initialState: {
        mainPage: null,
        genresOfMovie: [],
        numberPage: 1,
        pagesCount: null,
        inputValue: '',
        selectedMovie: null,
        movieTrailer: [],
        recommendedMovies: null,
        favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) || [],
        favoriteMoviesArr: [],
        topRatedMovies: null
    },
    reducers: {
        setMainPage: (state, action) => {
            state.mainPage = action.payload;
        },
        setGenresOfMovie: (state, action) => {
            state.genresOfMovie = action.payload
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
        setMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        setRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload;
        },
        setFavoriteMovies: (state, action) => {
            state.favoriteMovies = action.payload.newArrWithFavorMoviesId;
            state.favoriteMoviesArr = action.payload.fma
        },
        setFavoriteMoviesArr: (state, action) => {
            state.favoriteMoviesArr = action.payload;  
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