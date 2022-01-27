import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router'
import { actions } from '../../store/reducers/statesReducer/reducerStates';
import './selectedMovie.scss';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import RecommendationsComponents from "./RecommendationsComponents/RecommendationsComponents";
import FooterComponent from "../FooterComponent/FooterComponent";
import PreLoadingPage from "../PreLoadingPage/PreLoadingPage";
import MovieTrailer from "../MovieTrailer/MovieTrailer";

const SelectedMovieComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage.selectedMovie);
    const store2 = useSelector((state) => state.reducerForMainPage);
    const params = useParams()
    const URL_moviesInfo = `https://api.themoviedb.org/3/movie/${params.id}?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US`
    const URL_movieTrailer = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US`

    const inclFilm = store2.favoriteMovies.includes(+params.id)


    let isSubscribed = true;

    function getMovieTrailer() {
        fetch(URL_movieTrailer)
            .then(res => res.json())
            .then(
                ({ results }) => {
                    dispatch(actions.setMovieTrailer(results));
                })
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(URL_moviesInfo)
            .then(res => res.json())
            .then(
                (data) => {
                    if (isSubscribed) {
                        document.title = `${data.title}`
                        dispatch(actions.setSelectedMovie(data));
                    }
                }).then(() => { getMovieTrailer() })

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isSubscribed = false;
        }
    }, [params.id]);

    if (!store) return <PreLoadingPage />
    return (
        <div>
            <HeaderComponent title="TMBD's API" />
            <div className='wrapper selected-page'>
                <h1>{store.original_title}</h1>
                <div className="favorite-block">
                    <p className="vote-average">
                        <img className='like' src="https://pngicon.ru/file/uploads/like.png" alt="like" />
                        {store.vote_average}
                    </p>
                    <div className="block-star">
                        {
                            (!inclFilm) ?
                                <span>Add to favorite:</span> :
                                <span>Remove from favorite:</span>
                        }
                        <div className={!inclFilm ? 'star' : 'star add'}
                            onClick={() => dispatch(actions.setFavoriteMovies(+params.id))}>
                        </div>
                    </div>
                </div>
                <div className='backdrop-path' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${store.backdrop_path}')` }}>
                    <div className="bg-fon"></div>
                    {(store.tagline.length === 0) ? <p></p> : <p> "{store.tagline}" </p>}
                </div>
                <div className="basic-description">
                    <h2>{store.overview}</h2>
                    <div className="genres-block">
                        Genres:
                        {
                            store.genres.map(item =>
                                <span className="genres" key={item.id}>{item.name}</span>)
                        }
                    </div>
                    <div className="block-span-info">
                        <p><span className="span-info">STATUS:</span> {store.status};</p>
                        {(store.budget === 0) ? <p></p> : <p><span className="span-info">BUDGET:</span> ${store.budget};</p>}
                        {(store.revenue === 0) ? <p></p> : <p><span className="span-info">REVENUE:</span> ${store.revenue};</p>}
                        <p><span className="span-info">RELEASE DATE:</span> {store.release_date};</p>
                        <p><span className="span-info">RUNTIME:</span> {store.runtime} minutes;</p>
                        <p><span className="span-info">PRODUCTION COUNTRY:</span> {
                            store.production_countries.map(item => <span key={item.iso_3166_1}>{item.name}; </span>)
                        }</p>
                        <p><span className="span-info">PRODUCTION COMPANIES:</span> {
                            store.production_companies.map(item => <span key={item.id}>{item.name}; </span>)
                        }</p>
                        <p><span className="span-info">POPULARITY:</span> {store.popularity}.</p>
                    </div>
                </div>
                {
                    store2.movieTrailer.filter((item) => item.name === 'Official Trailer').map((item) =>
                        <MovieTrailer key={item.id} trailer_key={item.key} />
                    )
                }
                <RecommendationsComponents id={params.id} />
                <FooterComponent />
            </div>
        </div>
    )
};

export default SelectedMovieComponent;