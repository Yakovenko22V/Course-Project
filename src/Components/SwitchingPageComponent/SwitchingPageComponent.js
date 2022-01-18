import React from "react";
import './switchingPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerStates';
import { createPages } from "./functionCreatePages";

const SwitchingPageComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage);

    const arrOfAllPages = [];
    createPages(store.pagesCount, store.numberPage, arrOfAllPages)


    return (
        <div>
            <ul className="switch-page-list">
                {
                    arrOfAllPages.map((item) => (
                        <li id={item} key={item}
                            className={+store.numberPage === +item ? 'required page' : 'page'}
                            onClick={(e) => dispatch(actions.setNumberPage(e.target.id))}>{item}</li>))
                }
            </ul>
        </div>
    )
};

export default SwitchingPageComponent;