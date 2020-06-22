import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import menuReducer from './reducer';


export default createStore(
    combineReducers({
        form: formReducer,
        menu: menuReducer
    })
);
