import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import RecipeForm from './recipe-form/recipe-form';
import YourMenuItem from './menu/your-menu-item';
import YourMenu from './menu/your-menu';
import Navbar from './navbar';
import LandingPage from './landing-page';
import YourMenuCategory from './menu/your-menu-category';
import RegistrationForm from './registration-login-forms/registration-form';
import LoginForm from './registration-login-forms/login-form';
import GroceryList from './grocery-list/grocery-list';
import { refreshAuthToken } from '../actions/auth';
import Footer from "./footer";

export class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.userId && !this.props.userId){
      this.startPeriodicRefresh();
    }
    if(!nextProps.userId && this.props.userId){
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh(){
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60*60*1000
    );
  }

  stopPeriodicRefresh() {
    if(!this.refreshInterval) {
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
                    <Route
                      exact
                      path="/"
                      component={LandingPage} />
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
                      path="/add-recipe"
                      component={RecipeForm} />
                    <Route 
                      exact
                      path="/grocery-list"
                      component={GroceryList} />
                    <Route
                      exact
                      path="/register"
                      component={RegistrationForm} />
                    <Route 
                      exact
                      path="/login" 
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
  authToken: state.auth.authToken !== null,
  userId: state.auth.id,
});

// export default withRouter(connect(mapStateToProps)(LandingPage));
export default connect(mapStateToProps)(App);