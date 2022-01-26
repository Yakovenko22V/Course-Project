import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import usersLogo from '../../icons/usersLogo.png';

const UsersEnterComponent = () => {
    const [activeModal, setModal] = useState(false);
    return (
        <div className='users-actions-div'>
            <h4 onClick={() => setModal(!activeModal)}>
                <p title='LogIn'><img src={usersLogo} alt='LogIn' /></p>
                <div className={activeModal ? 'active-class' : 'not-active'}>
                    {<ModalComponent setSupportModal={setModal} actionName='LogIn' />}
                </div>
            </h4>
        </div>
    )
}

export default UsersEnterComponent;