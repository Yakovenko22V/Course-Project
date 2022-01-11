import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { MainPageCompItem } from "../MainPageComponent/MainPageCompItem";
import './favoriteMovies.scss';
import { actions } from '../../store/reducers/statesReducer/reducerStates';
import PreLoadingPage from '../PreLoadingPage/PreLoadingPage';

const FavoriteMoviesComponent = () => {
    document.title = 'Favorite Movies'
    const dispatch = useDispatch();
    const store = useSelector(state => state.reducerForMainPage);
   
    const FavorFilm = store.favoriteMoviesArr.filter(fl => {
            if (store.inputValue.length) {
               return fl.title.toLowerCase().includes(store.inputValue.toLowerCase())
            } else return fl
        })
    

    function getZhanr() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US')
            .then(res => res.json())
            .then(
                (data) => {
                    dispatch(actions.setZhanr(data.genres));
                })
    };
    
    useEffect(() => {
        store.favoriteMovies.map(item => {
            fetch(`https://api.themoviedb.org/3/movie/${item}?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US`)
            .then(res => res.json())
            .then(
                (data) => {
                    dispatch(actions.setFavoriteMoviesArr(data))
                }).then(() => { getZhanr() })

            return item
        })
                
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!store.zhanr || !store.favoriteMovies) return <PreLoadingPage/>

    return (
        <div>
            <HeaderComponent title="TMBD's API" name='FavoritePage'/>
            <div className='wrapper favorite'>
                <div className="main-favorite-block">
                    {
                        !FavorFilm.length ? <h2>The page hasn't any favorite films</h2> : <h2>FAVORITE MOVIES</h2>
                    }
                    <div className="popular-films">
                        {
                            FavorFilm.map(item =>
                                <MainPageCompItem key={item.id} item={item} />)
                        }
                    </div>
                </div>
                <FooterComponent />
            </div>
        </div>
    )

};

export default FavoriteMoviesComponent;