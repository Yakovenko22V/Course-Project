import React, { useEffect } from 'react';
import '../SearchComponent/searchComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerStates';

function SearchComponent({ name }) {
    const dispatch = useDispatch();
    const store = useSelector(state => state.reducerForMainPage);
    const URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US&page=${store.numberPage}`
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US&query=${store.inputValue}&page=${store.numberPage}&include_adult=false`
    let isSubscribed = true;

    const filteredByInput = data => {
        (data.length === data.trim().length) ?
            dispatch(actions.setFilteredByInput(data)) && dispatch(actions.setNumberPage(1)) :
            dispatch(actions.setFilteredByInput(data.trim()));
    };

    function getFilm({ url, callback, condition }) {
        fetch(url)
            .then(res => res.json())
            .then(
                ({ results, total_pages }) => {
                    if (condition) {
                        callback(results)
                        dispatch(actions.setPagesCount(total_pages));
                    }
                })
    }

    useEffect(() => {
        if (store.inputValue.length) {
            if (name === 'TopRatedMovies') {
                getFilm({ url: SEARCH_URL, callback: data => dispatch(actions.setTopRatedMovies(data)), condition: isSubscribed })
            }
            if (name === 'MainPage') {
                getFilm({ url: SEARCH_URL, callback: data => dispatch(actions.setMainPage(data)), condition: isSubscribed })
            }

        } else {
            if (name === 'MainPage') {
                getFilm({ url: URL_POPULAR, callback: data => dispatch(actions.setMainPage(data)), condition: isSubscribed })
            }

        }
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isSubscribed = false;
        }

    }, [store.inputValue.length, store.numberPage]);


    return (
        <div>
            <input className='input-search' placeholder='Search for a movie...' onChange={(e) => filteredByInput(e.target.value)}></input>
        </div>
    )
}

export default SearchComponent
