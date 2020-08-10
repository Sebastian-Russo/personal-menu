import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    UPDATE_USER_GROCERY_LIST_SUCCESS,
    UPDATE_USER_GROCERY_LIST_ERROR
} from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null, // "5f2aa35d43ea5564f76bd73f", //"5f297175fe118d52b6b9c948" //the user obj response from server 
    username: "",
    firstname: "",
    loading: false,
    error: null,
    groceryList: []
};

export default function authReducer(state = initialState, action) {
    let answer;
    if (action.type === SET_AUTH_TOKEN) {
        answer = Object.assign({}, state, {
            authToken: action.authToken,
            currentUser: action.userId,
            username: action.username
        });
        console.log('global store', action, answer)
        return answer

    } else if (action.type === CLEAR_AUTH) {
        answer = Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
        console.log('global store', action, answer)
        return answer

    } else if (action.type === AUTH_REQUEST) {
        answer = Object.assign({}, state, {
            loading: true,
            error: null
        });
        console.log('global store', action, answer)
        return answer

    } else if (action.type === AUTH_SUCCESS) {
        answer = Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser.id,
            username: action.currentUser.username,
            firstname: action.currentUser.firstname,
            lastname: action.currentUser.lastname,
            groceryList: [action.currentUser.groceryList]
        });
        console.log('global store', action, action.currentUser, answer)
        return answer

    } else if (action.type === AUTH_ERROR) {
        answer = Object.assign({}, state, {
            loading: false,
            error: action.error
        });
        console.log('global store', action, answer)
        return answer
    }


    // update grocery list connected to user 

    if (action.type === UPDATE_USER_GROCERY_LIST_SUCCESS) {
        answer = Object.assign({}, state, {
            groceryList: [...state.groceryList, action.groceryList]
        })
        console.log('global store', action, answer)
        return answer
    }
    if (action.type === UPDATE_USER_GROCERY_LIST_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        console.log('global store', action, answer)
        return answer
    }

    // console.log('global store', action, answer)
    return state;
}
