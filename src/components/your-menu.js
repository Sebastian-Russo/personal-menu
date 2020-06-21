import React from 'react';
import {connect} from 'react-redux';
// import {} from '../actions';

export function YourMenu(props) {
    console.log(props)
    const menuItem = props.menuItems.map(menuItem => (
        <li className="menu-item" key={menuItem.id}>
            <h2 className="menu-item-name">{menuItem.name}</h2>
            <div className="menu-item-ingredients">{menuItem.ingredients}</div>
            <div className="menu-item-steps">{menuItem.steps}</div>
        </li>
    ));
    
    return (
        <div className="menu-items">
            <h2>Categories</h2>
            <ul className="menu-item-list">{menuItem}</ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    menuItems: state.menuItems
});

export default connect(mapStateToProps)(YourMenu)