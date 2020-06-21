import React from 'react';
import logo from '../logo.svg';
// import {Link} from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Welcome back to your menu! </p>
        <p> Would you like to: </p>
        {/* <p><Link>Add a new recipe</Link> 
        or <Link>browse your menu</Link>?</p> */}

      </header>
    </div>
  );
}

