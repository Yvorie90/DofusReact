import React from 'react';
import AboutContent from '../components/AboutContent';
import Navbar from "../components/Navbar"

const About = () => {
    return (
        <div className="Homepage">
            <div className='navbar-container'>
                <Navbar/>
                <div className='content-page'>
                    <AboutContent/>
                </div>
            </div>
        </div>
    );
};

export default About;