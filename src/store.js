import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {authSuccess, refreshAuthToken} from './actions/auth';

import {authReducer,
    menuReducer,
    categoryReducer} from './reducers';

const store = createStore(
    combineReducers({
        form: formReducer,
        menu: menuReducer,
        category: categoryReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk) // applyMiddleware function to add Redux Thunk to our store
);


const user = loadAuthToken();
if (user) {
  console.log('user info', user);
  store.dispatch(authSuccess(user));
}

export default store;