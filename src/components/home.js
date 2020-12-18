import React from 'react';
import '../App.css';
import MainContent from "./main-content";

const Home = () => {
    return (
        <div>
            <div className="main">
                <div className="centered">
                    <h1 className="home-title text-center"><span>Eat Drink Visit</span></h1>

                </div>
            </div>
            <MainContent/>
        </div>
    );
};

export default Home;