import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../asserts/images/Logo.svg';
import './styles.scss';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-band">
                <NavLink exact to="/">
                    <img src={Logo} alt="spclnch logo" />
                </NavLink>
            </div>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink to="/albums" className="navbar-link">Albums</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/podcasts" className="navbar-link">Podcasts</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/choose-your-color" className="navbar-link">Choose your color</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/artists" className="navbar-link">Artists</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/about" className="navbar-link">About</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/contacts" className="navbar-link">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
};