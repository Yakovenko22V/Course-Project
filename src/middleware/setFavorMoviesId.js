export const setFavorMoviesId = (store) => (next) => (action) => {
    const currentStore = store.getState().reducerForMainPage;
    let newFMA = [...currentStore.favoriteMoviesArr]

    if (action.type === 'reducerStates/setFavoriteMovies') {
        const newArrWithFavorMoviesId = [...currentStore.favoriteMovies];
        const fma = newFMA.filter(it => it.id !== action.payload)
        const index = newArrWithFavorMoviesId.indexOf(action.payload);
        (index === -1) ? newArrWithFavorMoviesId.push(action.payload) : newArrWithFavorMoviesId.splice(index, 1);
        action.payload = {newArrWithFavorMoviesId, fma}
        localStorage.setItem('favoriteMovies', JSON.stringify(newArrWithFavorMoviesId));
        return next(action)
    }

    if (action.type === 'reducerStates/setFavoriteMoviesArr') {
        if (!newFMA.some(fl => fl.id === action.payload.id)) {
            newFMA.push(action.payload)
        }
        action.payload = newFMA
        return next(action)
    }

    return next(action)
}