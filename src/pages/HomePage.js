import React from 'react';
import Navbar from "../components/Navbar";
import CardContainer from "../components/CardContainer";
import Header from '../components/Header';

const HomePage = () => {
    return (
        <div className="Homepage">
            <div className='navbar-container'>
                <Navbar/>
                <div>
                    <Header/>
                    <CardContainer/>
                </div>
            </div>

        </div>
    );
};

export default HomePage;