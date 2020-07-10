import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import RecipeForm from './recipe-form';
import YourMenuItem from './your-menu-item';
import YourMenu from './your-menu';
import Navbar from './navbar';
import YourMenuCategoriesCategory from './your-menu-categories-category';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';

export default function Dashboard() {

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

