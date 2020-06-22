import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

export function Sidebar(props) {
    // const {menuItems} = props;
    // const menuItem = menuItems.map(item => 
    //     <li key={item.id}>
    //         <Link to={}/>
    //     </li>
    // );

    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <ul className="sidebar-list">
                    <li><Link to="/your-menu" className="sidenav">Your Menu </Link></li>
                    <li><Link to="/recipe-form" className="sidenav">Add Recipe</Link></li>
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    menuItems: state.menuItems
})

export default connect(mapStateToProps)(Sidebar);