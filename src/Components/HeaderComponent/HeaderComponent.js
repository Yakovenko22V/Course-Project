import React, { useState } from 'react'
import SearchComponent from '../SearchComponent/SearchComponent';
import './headerComponent.scss';
import MenuComponent from '../MenuComponent/MenuComponent';
import ModalComponent from '../ModalComponent/ModalComponent';

function HeaderComponent({ title, name }) {
    const [activeModal, setModal] = useState(false);
    const [activeSignUp, setActiveSignUp] = useState(false);


    return (
        <header className='header'>
            <MenuComponent />
            <h1>{title}</h1>
            <SearchComponent name={name} />
            <div className='users-actions-div'>
                <h4 onClick={() => setModal(!activeModal)}>
                    <span>LogIn</span>
                    <div className={activeModal ? 'active-class' : 'not-active'}>
                        {<ModalComponent setSupportModal={setModal} actionName='LogIn' />}
                    </div>
                </h4>
                <h4 onClick={() => setActiveSignUp(!activeSignUp)}>
                    <span>SignUp</span>
                    <div className={activeSignUp ? 'active-class' : 'not-active'}>
                        {<ModalComponent setSupportModal={setActiveSignUp} actionName='SignUp' />}
                    </div>
                </h4>
            </div>
        </header>
    )
}

export default HeaderComponent
