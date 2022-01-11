import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/reducers/statesReducer/reducerStates';
import { MainPageCompItem } from "../../MainPageComponent/MainPageCompItem";

const RecommendationsComponents = ({ id }) => {
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
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=80b5675ae89432a73afebc4c62ea727b&language=en-US&page=1`)
            .then(res => res.json())
            .then(
                ({ results }) => {
                    if (isSubscribed) {
                        dispatch(actions.setRecommendedMovies(results))
                    }
                }).then(() => { getZhanr() });

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isSubscribed = false;
        }
    }, []);

    if (!store.recommendedMovies) return <div>loading...</div>
    return (
        <>
            <h2>Recommended movies</h2>
            <div className='popular-films'>
                {
                    [...store.recommendedMovies].sort(() => Math.random() - Math.random()).slice(0, 5).map(item =>
                        <MainPageCompItem key={item.id} item={item} />
                    )
                }
            </div>
        </>
    )
};

export default RecommendationsComponents;