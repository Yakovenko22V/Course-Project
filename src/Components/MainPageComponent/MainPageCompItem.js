import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {actions} from '../../store/reducers/statesReducer/reducerStates';

function MainPageCompItem(props) {

    const { item } = props
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage);

    const isGenresIds = item.genre_ids ? 
    item.genre_ids.map(itemFilmId => {
        const gnr = store.zhanr.find(item => item.id === itemFilmId)
        return gnr
    }) :
    item.genres
 

    return (
        <NavLink to={`/selected-movie/${item.id}`} className='films-block'>
            <div className="film-post">
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} alt='poster' />
            </div>
            <div className="under-post-block">
                <h4>{item.title}</h4>
                <div className="genre-block">
                    {
                      !store.zhanr.length ?
                            <div /> :
                            isGenresIds.map(item => {
                                return <span className="genre-span" key={item.id}>{item.name}</span>
                            })
                    }
                </div>
                <div className={!store.favoriteMovies.includes(+item.id) ? 'star' : 'star add'}
                    onClick={() => dispatch(actions.setFavoriteMovies(+item.id))}>
                </div>
            </div>
        </NavLink>
    )
}

export { MainPageCompItem }