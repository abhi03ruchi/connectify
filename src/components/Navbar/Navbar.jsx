import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
const Navbar = () => {
    return (
        <>
            <header className="l-header">
                <nav className="nav bd-container">
                    <a href="#home" className="nav__logo">Connectify</a>
                    <div className='nav__menu' id="nav-menu">
                        <ul className="nav__list" >
                            <li className="nav__item"><a href='#home' className="nav__link ">About</a></li>
                            <li className="nav__item"><a href='#features' className="nav__link ">Features</a></li>
                            <li className="nav__item"><a href='#team' className="nav__link ">Team</a></li>
                            <li className="nav__item"><Link to='/dashboard' className="nav__link">User DashBoard</Link></li>
                        </ul>
                    </div>
                    <Toggle/>
                </nav>

            </header>
        </>
    )
}

export default Navbar;
