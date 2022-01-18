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

const SelectedMovieComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage.selectedMovie);
    const store2 = useSelector((state) => state.reducerForMainPage);
    const params = useParams()
    
    const inclFilm = store2.favoriteMovies.includes(+params.id)
    
    let isSubscribed = true;

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US`)
            .then(res => res.json())
            .then(
                (data) => {
                    if (isSubscribed) {
                        document.title = `${data.title}`
                        dispatch(actions.setSelectedMovie(data));
                    }
                })

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isSubscribed = false;
        }
    }, [params.id]);
    
    if (!store) return <PreLoadingPage/>
    return (
        <div>
            <HeaderComponent title="TMBD's API" />
            <div className='wrapper selected-page'>
                <div className='backdrop-path' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${store.backdrop_path}')` }}>
                    <div className="bg-fon"></div>
                    {(store.tagline.length === 0) ? <p></p> : <p> "{store.tagline}" </p>}
                </div>
                <div className="basic-description">
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
                    <h1>{store.original_title}</h1>
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
                <RecommendationsComponents id={params.id} />
                <FooterComponent />
            </div>
        </div>
    )
};

export default SelectedMovieComponent;