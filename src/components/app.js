import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import RecipeForm from './recipe-form';
import YourMenuItem from './your-menu-item';
import YourMenu from './your-menu';
import Navbar from './navbar';
import Home from './home';
import YourMenuCategory from './your-menu-category';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';
import GroceryList from './grocery-list';
import { refreshAuthToken } from '../actions/auth';
import Footer from "./footer";
import { getRecipes } from '../actions';

export class App extends React.Component {

  componentDidMount() {
    if (this.props.userId) { // if a user logs in (userId is truthy), dispatch getRecipes
      this.props.dispatch(getRecipes(this.props.userId))
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.userId && this.props.userId) {
        this.startPeriodicRefresh();
        // this.dispatch(getRecipes(token))
    } else if (prevProps.userId && !this.props.userId) {
        this.stopPeriodicRefresh();
    }
}
// When the component will definitely rerender
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
          <div>
              <header className="header"></header>
              <Navbar />
                <main className="main">
                  <Switch>
                    <Redirect 
                      exact
                      from="/"
                      to="/home" />
                    <Route
                      exact
                      path="/home"
                      component={Home} />
                    <Route
                      exact
                      path="/your-menu"
                      component={YourMenu} />
                    <Route
                      exact
                      path="/your-menu/:category"
                      component={YourMenuCategory} />
                    <Route
                      exact
                      path="/your-menu/:category/:id"
                      component={YourMenuItem} />
                    <Route
                      exact
                      path="/recipe-form"
                      component={RecipeForm} />
                    <Route 
                      exact
                      path="/grocery-list"
                      component={GroceryList} />
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
                <Footer />
            </div>
        </Router>  
      );
    }

}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  userId: state.auth.currentUser,
  username: state.auth.username
});

// export default withRouter(connect(mapStateToProps)(LandingPage));
export default connect(mapStateToProps)(App);