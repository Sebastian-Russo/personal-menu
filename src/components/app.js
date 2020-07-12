import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import RecipeForm from './recipe-form';
import YourMenuItem from './your-menu-item';
import YourMenu from './your-menu';
import Navbar from './navbar';
import YourMenuCategoriesCategory from './your-menu-categories-category';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';
import { refreshAuthToken } from '../actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        this.stopPeriodicRefresh();
    }
}

  componentWillUpdate() {
    this.startPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  startPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

    render() {
      return (
        <Router>  
          <div className="dashboard">
              <header className="dashboard-header">
                <p> Welcome back to your menu! </p>
                <p> What would you like to do? </p>
              </header>
              <Navbar />
                <main className="main">
                  <Switch>
                    <Redirect 
                      exact
                      from="/"
                      to="/your-menu" />
                    <Route
                      exact
                      path="/your-menu"
                      component={YourMenu} />
                    <Route
                      exact
                      path="/your-menu-categories/:id"
                      component={YourMenuCategoriesCategory} />
                    <Route
                      exact
                      path="/your-menu-item/:id"
                      component={YourMenuItem} />
                    <Route
                      exact
                      path="/recipe-form"
                      component={RecipeForm} />
                    <Route
                      exact
                      path="/registration-form"
                      component={RegistrationForm} />
                    <Route 
                      exact
                      path="/login-form" 
                      component={LoginForm} />
                  </Switch>
                </main>
            </div>
        </Router>  
      );
    }

}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// export default withRouter(connect(mapStateToProps)(LandingPage));
export default connect(mapStateToProps)(App);