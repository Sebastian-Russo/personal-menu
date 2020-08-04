import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

import {authReducer,
    protectedDataReducer,
    menuReducer,
    groceryReducer,
    categoryReducer} from './reducers';



const store = createStore(
    combineReducers({
        form: formReducer,
        menu: menuReducer,
        category: categoryReducer,
        grocery: groceryReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(thunk) // applyMiddleware function to add Redux Thunk to our store
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;