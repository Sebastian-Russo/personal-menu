import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {Link} from 'react-router-dom';
import RecipeForm from './recipe-form';
import YourMenu from './your-menu';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome back to your menu! </p>
        <p> What would you like to do? </p>
      </header>
      <Router>
        {/* <SideBar /> */}
        <main>
          <Switch>
            <Route
              exact
              path="/recipe-form"
              component={RecipeForm} />
            <Route
              exact
              path="/your-menu"
              component={YourMenu} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

