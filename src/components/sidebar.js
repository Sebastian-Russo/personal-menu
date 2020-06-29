import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

export function Sidebar(props) {
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