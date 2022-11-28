import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img src="https://img.icons8.com/ios-filled/50/FFFFFF/online-store.png" alt='home'/> </li>
                </NavLink>
                <NavLink to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img className='img_info' src="https://img.icons8.com/pastel-glyph/64/FFFFFF/information--v1.png" alt='about'/> </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;