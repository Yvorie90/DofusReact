import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> acceuil </li>
                </NavLink>
                <NavLink to='/Apropos' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> à propos </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;