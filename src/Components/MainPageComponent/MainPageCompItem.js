import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actions } from '../../store/reducers/statesReducer/reducerStates';

function MainPageCompItem(props) {

    const { item } = props
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage);
    
    const isGenresIds = item.genre_ids ?
        item.genre_ids.map(itemFilmId => {
            const gnr = store.genresOfMovie.find(item => item.id === itemFilmId)
            return gnr
        }) :
        item.genres


    return (
        <div className='films-block'>
            <div className="film-post">
                <div className="info-hover-block">
                    <div className="wrapper-discription">
                        <p><span>Language:</span> {item.original_language.toUpperCase()}</p>
                        <p className="shot-overview"><span>Overview:</span> {item.overview}</p>
                        <div className="release-vote">
                            <p><span>{item.release_date}</span></p>
                            <p><span>&#128077; {item.vote_average.toFixed(1)}</span></p>
                        </div>
                    </div>
                </div>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} alt='poster' />
            </div>
            <div className="under-post-block">
                <NavLink to={`/selected-movie/${item.id}`} className='linkMovieTitle'>
                    <h3 title={item.title}>{item.title}</h3>
                </NavLink>
                <div className="genre-block">
                    {
                        !store.genresOfMovie.length ?
                            <div /> :
                            isGenresIds.map(item => {
                                return <span className="genre-span" key={item.id}>{item.name},</span>
                            })
                    }
                </div>
                <div className={!store.favoriteMovies.includes(+item.id) ? 'star' : 'star add'}
                    onClick={() => dispatch(actions.setFavoriteMovies(+item.id))}>
                </div>
            </div>
        </div>
    )
}

export { MainPageCompItem }