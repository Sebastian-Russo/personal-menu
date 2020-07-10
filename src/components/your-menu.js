import React from 'react';
import YourMenuCategories from './your-menu-categories'; 
import './your-menu.css'

export default function YourMenu(props) {
    return (
        <div className="menu-items container">
            <h1>Your Menu</h1>
            <YourMenuCategories />
        </div>
    );
}
