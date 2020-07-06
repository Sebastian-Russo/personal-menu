import React from 'react';
import YourMenuCategories from './your-menu-categories'; 

export default function YourMenu(props) {
    return (
        <div className="menu-items">
            <h1>Your Menu</h1>
            <YourMenuCategories />
        </div>
    );
}
