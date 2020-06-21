import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {} from '../actions';

export function YourMenu(props) {
    console.log(props);
    const {menuItems} = props;
    const menuItem = menuItems.map(item => (
        <li className="menu-item" key={item.id}>
            <Link to={`/${menuItems}`}>
                {item.name}
            </Link>
            <h2 className="menu-item-name">{item.name}</h2>
            <div className="menu-item-ingredients">{item.ingredients}</div>
            <div className="menu-item-steps">{item.steps}</div>
        </li>
    ));
    
    return (
        <div className="menu-items">
            <h1>Your Menu</h1>
            <h2>Categories</h2>
            <ul className="menu-item-list">{menuItem}</ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    menuItems: state.menuItems
});

export default connect(mapStateToProps)(YourMenu)

// const {menuItems} = props;
// const menuItem = menuItems.map(item => 
//     <li key={item.id}>
//         <Link to={`/${menuItems}`}>
//             {item.name}
//         </Link>
//     </li>
// );

// return (
//     <div className="sidebar">
//         <nav className="sidebar-nav">
//             <ul className="sidebar-list">
//                 {menuItem}
//             </ul>
//         </nav>
//     </div>
// );