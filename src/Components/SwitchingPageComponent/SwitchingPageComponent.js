import React from "react";
import './switchingPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/reducers/statesReducer/reducerStates';

const SwitchingPageComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.reducerForMainPage);

    const arrOfAllPages = [];
    
    function createPages() {
        if (store.pagesCount > 10) {
            if (store.numberPage > 5) {
                for (let i = +store.numberPage - 4; i <= +store.numberPage + 5; i++) {
                    arrOfAllPages.push(i)
                    if (i === store.pagesCount) break 
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    arrOfAllPages.push(i)
                    if (i === store.pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= store.pagesCount; i++) {
                arrOfAllPages.push(i)
            }
        }
    }
    createPages();


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