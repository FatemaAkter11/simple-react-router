import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeactiveStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <nav className="header-container">
            <NavLink activeStyle={activeactiveStyle} className="NavLink" to="/home">Home</NavLink>
            <NavLink activeStyle={activeactiveStyle} className="NavLink" to="/friends">Friends</NavLink>
            <NavLink activeStyle={activeactiveStyle} className="NavLink" to="/about">About</NavLink>
            <NavLink activeStyle={activeactiveStyle} className="NavLink" to="/about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;