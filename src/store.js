import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken, loadState, saveState} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

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


const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;