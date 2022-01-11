import React, { useState } from "react";
import './menuComponent.scss';
import MenuListComponent from "./MenuListComponent/MenuListComponent";

const MenuComponent = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <div>
            <ul className="container" onClick={() => setActiveMenu(!activeMenu)}>
                <div className={activeMenu ? 'change1 bar1' : 'bar1'}></div>
                <div className={activeMenu ? 'change2 bar2' : 'bar2'}></div>
                <div className={activeMenu ? 'change3 bar3' : 'bar3'}></div>
            </ul>
            <div className={activeMenu ? 'menu-list' : 'without-menu'}>
                <MenuListComponent />
            </div>
        </div>

    )
};

export default MenuComponent;