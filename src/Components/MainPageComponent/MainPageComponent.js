import React, { useEffect } from 'react'
import './mainPageComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actions as actionsForMainPage } from '../../store/reducers/statesReducer/reducerStates'
import { MainPageCompItem } from './MainPageCompItem';
import FooterComponent from '../FooterComponent/FooterComponent';
import SwitchingPageComponent from '../SwitchingPageComponent/SwitchingPageComponent';
import PreLoadingPage from '../PreLoadingPage/PreLoadingPage';


function MainPageComponent() {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage);
    const URL_Genres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US';
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US&page=${store.numberPage}`;
    
    let isSubscribed = true;

    function getGenresOfMovie() {
        fetch(URL_Genres)
            .then(res => res.json())
            .then(
                (data) => {
                    dispatch(actionsForMainPage.setGenresOfMovie(data.genres));
                })
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (store.inputValue.length > 0) {
            return store.mainPage
        } else {
            fetch(URL)
                .then(res => res.json())
                .then(
                    ({ results, total_pages }) => {
                        if (isSubscribed) {
                            document.title = "Popular Movies"
                            dispatch(actionsForMainPage.setMainPage(results));
                            dispatch(actionsForMainPage.setPagesCount(total_pages));
                        }
                    })
                .then(() => { getGenresOfMovie() })
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                isSubscribed = false;
            }
        }
    }, [store.inputValue.length, store.numberPage,]);

    if (!store.mainPage) return <PreLoadingPage/>
    return (
        <div className='wrapper'>
            {(store.mainPage.length === 0) ? <h2>Movies not found</h2>: <h2>POPULAR MOVIES</h2>}
            <div className='popular-films'>
                {
                    store.mainPage.map(item =>
                        <MainPageCompItem key={item.id} item={item} />
                    )
                }
            </div>
            <SwitchingPageComponent />
            <FooterComponent />
        </div>
    )
}

export default MainPageComponent
