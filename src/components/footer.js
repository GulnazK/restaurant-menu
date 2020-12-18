import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3 bg-dark text-light">
                   © 2020 Copyright:
                <Link className="text-light" to="https://mdbootstrap.com/">Cafe Dubai</Link>
            </div>
        </footer>
    );
};

export default Footer;