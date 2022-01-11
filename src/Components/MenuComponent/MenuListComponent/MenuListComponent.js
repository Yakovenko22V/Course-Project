import React, { useState } from "react";
import './menuListComponent.scss';
import homeIcon from '../../../icons/homeIcon.png';
import bookmarkIcon from '../../../icons/bookmarkIcon.png';
import chartIcon from '../../../icons/chartIcon.png';
import customerServiceIcon from '../../../icons/customerServiceIcon.png';
import { NavLink } from 'react-router-dom';
import { pathes } from "../../../pathes/pathes";
import ModalComponent from "../../ModalComponent/ModalComponent";
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/statesReducer/reducerStates';


const MenuListComponent = () => {
    const dispatch = useDispatch()
    const [activeSupportModal, setSupportModal] = useState(false);

    function clearInpt() {
        dispatch(actions.setFilteredByInput('')) && dispatch(actions.setNumberPage(1))
    }

    return (
        <>
            <NavLink to={pathes.main} title="Main page" onClick={clearInpt}>
                <img src={homeIcon} alt='main page' />
            </NavLink>
            <NavLink to={pathes.favoriteMovies} title="Favorite movies" onClick={clearInpt}>
                <img src={bookmarkIcon} alt='favorite films' />
            </NavLink>
            <NavLink to={pathes.rated} title="Top rated" onClick={clearInpt}>
                <img src={chartIcon} alt='top rated' />
            </NavLink>
            <div >
                <ul onClick={() => setSupportModal(!activeSupportModal)} >
                    <div className={activeSupportModal ? 'active-class' : 'not-active'}>
                        {<ModalComponent setSupportModal={setSupportModal} actionName='Support service'/>}
                    </div>
                    <img src={customerServiceIcon} alt='customer service' title="Support service" />
                </ul>
            </div>
        </>
    )
};

export default MenuListComponent;