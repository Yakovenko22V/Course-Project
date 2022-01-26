import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent';
import './headerComponent.scss';
import MenuComponent from '../MenuComponent/MenuComponent';
import UsersEnterComponent from '../UsersAccessComponent/UsersEnterComponent';

function HeaderComponent({ name }) {

    return (
        <header className='header'>
            <div className='header-elements'>
                <MenuComponent />
                <h1><span className='title-word1'>TMBD's</span> <span className='title-word2'>API</span></h1>
                <SearchComponent name={name} />
                <UsersEnterComponent />
            </div>
            <div className='header-line'></div>
        </header>
    )
}

export default HeaderComponent
