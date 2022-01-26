import React, { useState } from "react";
import UsersRegistrationComponent from "../UsersAccessComponent/UsersRegistationComponent";
import './modal.scss';

const ModalComponent = ({ setSupportModal, actionName }) => {
    const [formState, setFormState] = useState({
        mail: '',
        name: '',
        mess: '',
        pass: ''
    })

    function formSbmt(event) {
        event.preventDefault()
        setSupportModal(false)
        setFormState({
            mail: '',
            name: '',
            mess: '',
            pass: ''
        })
    }

    function changeState(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    if (actionName === 'Support service') {
        return (
            <div className="modal-wrapper-div">
                <form className="modal" onSubmit={formSbmt} onClick={e => e.stopPropagation()}>
                    <h2>{actionName}</h2>
                    <input
                        placeholder="Enter your name:"
                        name='name'
                        className="name"
                        required
                        onChange={changeState}
                        value={formState.name} />
                    <input
                        placeholder="Enter your Email:"
                        className="email"
                        name='mail'
                        type="email" required
                        value={formState.mail}
                        onChange={changeState} />
                    <textarea
                        rows="4" cols="50"
                        placeholder="Enter your message:"
                        name='mess' className="message" required
                        value={formState.mess}
                        onChange={changeState}
                    ></textarea>
                    <input className="btn" type="submit" value="Send" />
                </form>
            </div>)
    };

    if (actionName === 'LogIn') {
        return (
            <div className="modal-wrapper-div">
                <form className="modal" onSubmit={formSbmt} onClick={e => e.stopPropagation()}>
                    <h2>{actionName}</h2>
                    <input
                        placeholder="Enter your Email:"
                        className="email"
                        name='mail'
                        type="email" required
                        value={formState.mail}
                        onChange={changeState} />
                    <input
                        type="password"
                        placeholder="Password:"
                        name='pass'
                        className="name"
                        required
                        onChange={changeState}
                        value={formState.pass} />
                    <input className="btn" type="submit" value={actionName} />
                </form>
                <span className="register-span">
                    Don't have an account?
                    <span className="span-signIn">{<UsersRegistrationComponent />}</span>
                </span>
            </div>)
    }

    if (actionName === 'SignUp') {
        return (
            <div className="modal-wrapper-div">
                <form className="modal" onSubmit={formSbmt} onClick={e => e.stopPropagation()}>
                    <h2>{actionName}</h2>
                    <input
                        placeholder="Enter your Email:"
                        className="email"
                        name='mail'
                        type="email" required
                        value={formState.mail}
                        onChange={changeState} />
                    <input
                        type="password"
                        placeholder="Password:"
                        name='pass'
                        className="name"
                        required
                        onChange={changeState}
                        value={formState.pass} />
                    <input className="btn" type="submit" value={actionName} />
                </form>
            </div>)
    };
}

export default ModalComponent;