import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">Dubai Cafe</Link>
                    <div className="navbar-nav ml-auto">
                        <Link className="navbar-brand mr-2" to="/">Home</Link>
                        <Link className="navbar-brand" to="/menu">Menu</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;