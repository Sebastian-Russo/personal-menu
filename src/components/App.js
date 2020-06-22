import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import RecipeForm from './recipe-form';
import YourMenuItem from './your-menu-item';
import YourMenu from './your-menu';
import Sidebar from './sidebar';


export default function App() {

  return (
    <Router>  
       <div className="App">
          <header className="App-header">
            <p> Welcome back to your menu! </p>
            <p> What would you like to do? </p>
          </header>
          <Sidebar />
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
                  path="/recipe-form"
                  component={RecipeForm} />
                <Route
                  exact
                  path="/your-menu-item"
                  component={YourMenuItem} />
              </Switch>
            </main>
        </div>
    </Router>  
  );
}

