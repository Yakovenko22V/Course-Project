import React, { useEffect } from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../FooterComponent/FooterComponent";
import './topRated.scss';
import { actions } from '../../store/reducers/statesReducer/reducerStates';
import { MainPageCompItem } from '../MainPageComponent/MainPageCompItem';
import SwitchingPageComponent from '../SwitchingPageComponent/SwitchingPageComponent';
import PreLoadingPage from "../PreLoadingPage/PreLoadingPage";


const TopRatedComponent = () => {
    document.title = 'Top Rated Movies'
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage);

    let isSubscribed = true;

    function getZhanr() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US')
            .then(res => res.json())
            .then(
                (data) => {
                    dispatch(actions.setZhanr(data.genres));
                })
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (store.inputValue.length > 0) {
            return store.mainPage
        } else {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US&page=${store.numberPage}`)
                .then(res => res.json())
                .then(
                    ({ results, total_pages }) => {
                        if (isSubscribed) {
                            dispatch(actions.setTopRatedMovies(results));
                            dispatch(actions.setPagesCount(total_pages));
                        }
                    })
                .then(() => { getZhanr() })
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                isSubscribed = false;
            }
        }
    }, [store.inputValue.length, store.numberPage,]);

    if (!store.topRatedMovies) return <PreLoadingPage/>
    return (
        <div>
            <HeaderComponent title="TMBD's API" name='TopRatedMovies'/>
            <div className="wrapper rated">
            {(store.topRatedMovies.length === 0) ? <h2>Movies not found</h2>: <h2>TOP RATED MOVIE</h2>}
                <div className="main-rated-block popular-films">
                    {
                        store.topRatedMovies.map(item =>
                            <MainPageCompItem key={item.id} item={item} />
                        )
                    }
                </div>
                <SwitchingPageComponent />
                <FooterComponent />
            </div>
        </div>
    )
};

export default TopRatedComponent;