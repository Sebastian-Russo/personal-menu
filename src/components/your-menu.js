import React from 'react';
import YourMenuCategories from './your-menu-categories'; 

export default function YourMenu(props) {
    return (
        <div className="menu-items container">
            <h1>Your Menu</h1>
            <YourMenuCategories />
        </div>
    );
}
