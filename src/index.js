import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import {Provider} from 'react-redux';
// import RecipeForm from './components/recipe-form';
import App from './components/App';
// import store from './store';
import * as serviceWorker from './serviceWorker';
import './index.css';

const initialState = {
  menuItems: [
      {
          id: 0,
          name: "grilled cheese",
          ingredients: ["bread", "cheese", "butter"],
          steps: ["put cheese on bread", "pan fry bread till golden brown and cheese has melted"]
      },
      {
          id: 1,
          name: "ramen",
          ingredients: ["roman packet of noodles"],
          steps: ["boil water", "wait 3 minutes"]
      },
      {
          id: 2,
          name: "cereal",
          ingredients: ["cereal", "milk"],
          steps: ["pour cereal into bowl", "pour milk into bowl"]
      }
  ]
}

const store = createStore(state => state, initialState);

ReactDOM.render(
  <Provider store={store}>
    {/* <RecipeForm /> */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
