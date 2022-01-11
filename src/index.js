import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './pathes/pathes'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { ErrorBoundary } from './error-boundary/ErrorBoundary';
import { pathes } from './pathes/pathes';
import SelectedMovieComponent from './Components/SelectedMovieComponent/SelectedMovieComponent';
import FavoriteMoviesComponent from './Components/FavoriteMoviesComponent/FavoriteMoviesComponent';
import TopRatedComponent from './Components/TopRatedComponent/TopRatedComponent';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <Routes>
            <Route path={pathes.main} element={<App />} />
            <Route path ={pathes.movie} element={<SelectedMovieComponent />} />
            <Route path ={pathes.favoriteMovies} element={<FavoriteMoviesComponent />} />
            <Route path ={pathes.rated} element={<TopRatedComponent />} />
          </Routes>
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


