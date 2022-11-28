import React from 'react';
import Navbar from "../components/Navbar"


const Fourofour = () => {
    return (
        <div className="fourofour">
            <div className='navbar-container'>
                <Navbar/>
                <div className='content-page'>
                    <div className='fourofour-content'>
                        ERROR 404 !
                        <p>
                            AÏE !! Vous vous êtes perdu !!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fourofour;