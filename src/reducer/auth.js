import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    SET_AUTH_TOKEN
} from '../actions/auth';

const initialState = {
    authToken: null, 
    currentUser: null, 
    loading: false, 
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        Object.assign({}, state, {
            authToken: action.authToken
        });
    }
    else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true, 
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: action.currentUser, 
            loading: false
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            error: action.error, 
            loading: false
        });
    }
    return state;
}