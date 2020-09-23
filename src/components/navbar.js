import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../actions/auth';
 
import './navbar.css';

export function Navbar(props){
  const { loggedIn, authToken, userId, groceryList } = props;
    let userAction;
    if (loggedIn) {
      userAction = (
        <div className="user-action-container">
          <Link to="/"
            className="nav-list-items button-logout"
            onClick={() => props.dispatch(logOut(authToken, userId, groceryList))} 
          >
            <i className="fas fa-user"></i>Log out
          </Link>
        </div>
      );
    } else {
      userAction = (
        <div className="user-action-container button-login">
          <Link to="/register" className="nav-list-items"><i className="fas fa-kiwi-bird"></i>Register</Link>
          <Link to="/login" className="nav-list-items login"><i className="fas fa-user"></i>Login</Link>
        </div>
      )
    }

    return (
      <div className="nav-wrapper">
        <nav className="nav-bar">
          <label className="logo">
            <img src="images/logo.png" alt="fork and knife" width="150px" height="180px"/>
          </label>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="hamburger-button"><i className="fas fa-bars"></i></label>
          <ul className="navbar-list">
            <div><Link to="/" className="nav-list-items"><i className="fas fa-home"></i>Home</Link></div>
            <div><Link to="/your-menu" className="nav-list-items"><i className="fas fa-utensils"></i>  Your Menu</Link></div>
            <div><Link to="/add-recipe" className="nav-list-items"><i className="fas fa-book-open"></i>  Add Recipe</Link></div>
            <div><Link to="/grocery-list" className="nav-list-items"><i className="fas fa-th-list"></i>  Grocery List</Link></div>
            <div>{userAction}</div>
          </ul>
        </nav>
      </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.id !== null,
    authToken: state.auth.authToken,
    userId: state.auth.id,
    groceryList: state.auth.groceryList
});


export default connect(mapStateToProps)(Navbar)