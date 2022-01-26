import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";

const UsersRegistrationComponent = ({setSupportModal}) => {
    const [activeSignUp, setActiveSignUp] = useState(false);
    return (
        <>
            <span onClick={() => setActiveSignUp(!activeSignUp)}>
                <span>SignUp</span>
                <div className={activeSignUp ? 'active-class' : 'not-active'}>
                    {<ModalComponent setSupportModal={setActiveSignUp} actionName='SignUp'/>}
                </div>
            </span>
        </>
    )
}

export default UsersRegistrationComponent;