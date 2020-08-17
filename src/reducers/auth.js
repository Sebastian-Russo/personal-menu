import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    
    UPDATE_USER_GROCERY_LIST_SUCCESS,
    UPDATE_USER_GROCERY_LIST_ERROR,
    UPDATE_USER_CATEGORY_LIST_SUCCESS,
    UPDATE_USER_CATEGORY_LIST_ERROR
} from '../actions/auth';

import {
    ADD_TO_GROCERY_LIST, 
    DELETE_ITEM_FROM_GROCERY_LIST,
    ADD_CATEGORY
} from '../actions';


const initialState = {
    id: null, // "5f2aa35d43ea5564f76bd73f", //"5f297175fe118d52b6b9c948" //the user obj response from server 
    error: null,
    loading: false,
    username: "",
    authToken: null, // authToken !== null does not mean it has been validated
    firstname: "",
    groceryList: [],
    categoryList: []
};

export default function authReducer(state = initialState, action) {
    let answer;
    if (action.type === SET_AUTH_TOKEN) {
        answer = Object.assign({}, state, {
          authToken: action.authToken
        });
        console.log(action, answer)
        return answer
    } else if (action.type === CLEAR_AUTH) {
        answer = Object.assign({}, state, {
            authToken: null,
            id: null
        });
        console.log('clear auth', action, answer)
        return answer

    } else if (action.type === AUTH_REQUEST) {
        answer = Object.assign({}, state, {
            loading: true,
            error: null
        });
        console.log(action, answer)
        return answer

    } else if (action.type === AUTH_SUCCESS) {
        answer = Object.assign({}, state, {
            loading: false,
            id: action.currentUser.id,
            authToken: action.authToken,
            username: action.currentUser.username,
            groceryList: [...state.groceryList.concat(action.currentUser.groceryList)],
            categoryList: [...state.categoryList.concat(action.currentUser.categoryList)]
        });
        console.log('toUpdate', action)
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
            groceryList: [...state.groceryList, ...action.groceryList]
        })
        console.log(action, answer)
        return answer
    }
    if (action.type === UPDATE_USER_GROCERY_LIST_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        console.log(action, answer)
        return answer
    }
    if (action.type === ADD_TO_GROCERY_LIST) {
        answer = Object.assign({}, state, {
            groceryList: [...state.groceryList.concat(action.items)]
        })
        console.log(action, answer)
        return answer
    }
    if (action.type === DELETE_ITEM_FROM_GROCERY_LIST) {
        const selected = state.groceryList.filter((item, index) => index !== action.index)
        answer = Object.assign({}, state, {
                groceryList: selected
        })
        console.log(action, answer)
        return answer
    }

// update categoryList connected to user 

    if (action.type === UPDATE_USER_CATEGORY_LIST_SUCCESS) {
        answer = Object.assign({}, state, {
            categoryList: [...state.categoryList, ...action.categoryList]
        })
        console.log(action, answer)
        return answer
    }
    if (action.type === UPDATE_USER_CATEGORY_LIST_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        console.log(action, answer)
        return answer
    }
    // if (action.type === ADD_TO_CATEGORY_LIST) {
    //     answer = Object.assign({}, state, {
    //         categoryList: [...state.categoryList.concat(action.items)]
    //     })
    //     console.log(action, answer)
    //     return answer
    // }
    // if (action.type === DELETE_ITEM_FROM_CATEGORY_LIST) {
    //     const selected = state.categoryList.filter((item, index) => index !== action.index)
    //     answer = Object.assign({}, state, {
    //             categoryList: selected
    //     })
    //     console.log(action, answer)
    //     return answer
    // }

    if (action.type === ADD_CATEGORY) {
        answer = Object.assign({}, state, {
            categoryList: [...state.categoryList, action.category]
        })
        console.log(action, answer)
        return answer
    }

    return state;
}
