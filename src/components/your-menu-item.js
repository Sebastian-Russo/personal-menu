import React from 'react';
import {connect} from 'react-redux';
import YourMenuItemIngredients from './your-menu-item-ingredients';
import YourMenuItemSteps from './your-menu-item-steps';
// *** AKA RECIPE COMPONENT ***

export function YourMenuItem(props) {
    console.log(props)
    const {menuItems} = props;

    const menuItem = menuItems.map(menuItem => (
        <div className="menu-menuItem" key={menuItem.id}>
            <h2 className="menu-menuItem-name">{menuItem.name}</h2>
            <YourMenuItemIngredients />
            <br></br>
            <YourMenuItemSteps />
        </div>
    ));

    return (
        <div className="menu-items">
            <h1>Your Menu</h1>
            <h2>Categories</h2>
            <ul className="menu-menuItem-list">{menuItem}</ul>
        </div>
    );
}

const mapStateToProps = state => ({
    menuItems: state.menu.menuItems
});

export default connect(mapStateToProps)(YourMenuItem)
