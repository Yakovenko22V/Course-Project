import React, { useState } from "react";
import './menuListComponent.scss';
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
                <p>Popular movies</p>
            </NavLink>
            <NavLink to={pathes.favoriteMovies} title="Favorite movies" onClick={clearInpt}>
                <p>Favorite movies</p>
            </NavLink>
            <NavLink to={pathes.rated} title="Top rated" onClick={clearInpt}>
                <p>Top rated</p>
            </NavLink>
            <div >
                <ul onClick={() => setSupportModal(!activeSupportModal)} >
                    <p className="contact-us">Contact Us</p>
                    <div className={activeSupportModal ? 'active-class' : 'not-active'}>
                        {<ModalComponent setSupportModal={setSupportModal} actionName='Support service' />}
                    </div>
                </ul>
            </div>
        </>
    )
};

export default MenuListComponent;