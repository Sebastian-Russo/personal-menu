import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {} from '../actions';

export function YourMenu(props) {
    console.log(props)
    const {menuItems} = props;
    const menuItem = menuItems.map(item => (
        <li className="menu-item" key={item.id}>
            <h3 className="menu-item-name">
                <Link to="/your-menu-item">
                    {item.name} 
                </Link>
            </h3>
        </li>
    ));
    
    return (
        <div className="menu-items">
            <h1>Your Menu</h1>
            <ul className="menu-item-list">
                {menuItem}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
        menuItems: state.menuItems
});

export default connect(mapStateToProps)(YourMenu)
