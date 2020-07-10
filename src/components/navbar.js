import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <nav className="navbar-nav">
                <ul className="navbar-list">
                    <div><Link to="/your-menu" className="nav-list-items">Your Menu</Link></div>
                    <div><Link to="/recipe-form" className="nav-list-items">Add Recipe</Link></div>
                    <div><Link to="/registration-form">Register</Link></div>
                    <div><Link to="/login-form">Login</Link></div>
                </ul>
            </nav>
        </div>
    );
}
