import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
    return (
        <div className="nav-wrapper">
            <nav className="nav-bar">
            <label class="logo">Logo</label>
                <input type="checkbox" id="check" />
                <label for="check" className="hamburger-button"><i class="fas fa-bars"></i></label>
                <ul className="navbar-list">
                    <div><Link to="/home" className="nav-list-items"><i class="fas fa-home"></i>  Home</Link></div>
                    <div><Link to="/your-menu" className="nav-list-items"><i class="fas fa-utensils"></i>  Your Menu</Link></div>
                    <div><Link to="/recipe-form" className="nav-list-items"><i class="fas fa-book-open"></i>  Add Recipe</Link></div>
                    <div><Link to="/grocery-list" className="nav-list-items"><i class="fas fa-th-list"></i>  Grocery List</Link></div>
                    <div><Link to="/registration-form" className="nav-list-items"><i class="fas fa-kiwi-bird"></i>  Register</Link></div>
                    <div><Link to="/login-form" className="nav-list-items"><i class="fas fa-user"></i>  Login</Link></div>
                </ul>
            </nav>
        </div>
    );
}
