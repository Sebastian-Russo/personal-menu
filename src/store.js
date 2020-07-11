import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import authReducer from './reducers/auth';
// import protectedDataReducer from './reducers/protected-data';

import menuReducer from './reducer';


export default createStore(
    combineReducers({
        form: formReducer,
        menu: menuReducer
        // auth: authReducer,
        // protectedData: protectedDataReducer
    }),
    applyMiddleware()
);

