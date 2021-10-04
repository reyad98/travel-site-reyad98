import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
           <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About us</a>
                <a href="/discover">Discover</a>
            </nav>
        </div>
        </div>
    );
};

export default Header;