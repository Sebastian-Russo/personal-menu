import React from 'react';
import {connect} from 'react-redux';
import YourMenuCategories from './your-menu-categories'; 

export function YourMenu(props) {
    
    return (
        <div className="menu-items">
            <h1>Your Menu</h1>
            <YourMenuCategories />
        </div>
    );
}

const mapStateToProps = state => ({
        menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenu)
