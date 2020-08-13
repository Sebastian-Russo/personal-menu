import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth, updateUserGroceryList} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './navbar.css';

export class Navbar extends React.Component {

    logOut() {
        console.log('clicked logout', this.props.authToken, this.props.userId, this.props.groceryList)
        this.props.dispatch(updateUserGroceryList(this.props.authToken, this.props.userId, this.props.groceryList)) 
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {

    let userAction;
    if (this.props.loggedIn) {
      userAction = (
        <div className="user-action-container">
          <Link to="/"
            className="nav-list-items button-logout"
            onClick={() => this.logOut()}   
          >
            <i className="fas fa-user"></i>Log out
          </Link>
        </div>
      );
    } else if (!this.props.loggedIn){
      userAction = (
        <div className="user-action-container">
          <Link to="/register" className="nav-list-items"><i className="fas fa-kiwi-bird"></i>Register</Link>
          <Link to="/login" className="nav-list-items"><i className="fas fa-user"></i>Login</Link>
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
}
    const mapStateToProps = state => ({
        loggedIn: state.auth.id !== null,
        authToken: state.auth.authToken,
        userId: state.auth.id,
        groceryList: state.auth.groceryList
    });


export default connect(mapStateToProps)(Navbar)