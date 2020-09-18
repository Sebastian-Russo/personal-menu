import {SubmissionError} from 'redux-form';
import { login } from './auth';
import {normalizeResponseErrors} from './utils';
import {API_BASE_URL} from '../config';

export const ADD_ITEM_TO_GROCERY_LIST = 'ADD_TO_GROCERY_LIST';
export const addItemToGroceryList = item => ({
    type: ADD_ITEM_TO_GROCERY_LIST,
    item
});

export const DELETE_ITEM_FROM_GROCERY_LIST = 'DELETE_ITEM_FROM_GROCERY_LIST';
export const deleteItemFromGroceryList = index => ({
    type: DELETE_ITEM_FROM_GROCERY_LIST,
    index
})

export const ADD_CATEGORIES_TO_USER = "ADD_CATEGORIES_TO_USER";
export const addCategoriesToUser = category => ({
  type: ADD_CATEGORIES_TO_USER,
  category
});

export const DELETE_CATEGORIES_FROM_USER = "DELETE_CATEGORIES_FROM_USER";
export const deleteCategoriesFromUser = index => ({
  type: DELETE_CATEGORIES_FROM_USER,
  index
})

export const UPDATE_USER_LISTS_SUCCESS = 'UPDATE_USER_LISTS_SUCCESS';
export const updateUserListsSuccess = ({ groceryList, categoryList }) => ({
    type: UPDATE_USER_LISTS_SUCCESS,
    groceryList,
    categoryList
})

export const UPDATE_USER_LISTS_ERROR = 'UPDATE_USER_LISTS_ERROR';
export const updateUserListsError = error => ({
    type: UPDATE_USER_LISTS_ERROR,
    error
})

export const updateUserLists = () => (dispatch, getState) => {
  const { users, auth } = getState();
    fetch(`${API_BASE_URL}/users/${auth.id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${auth.authToken}`,
            'Content-type': 'application/json' 
        },
        body: JSON.stringify({
          id: auth.id,
          groceryList: users.groceryList,
          categoryList: users.categoryList
        })
    }).then(res => {
        return res.json()
    }).then(json => {
      dispatch(updateUserListsSuccess(json));
    }).catch(err => {
        dispatch(updateUserListsError(err))
    });
}

export const registerUser = user => dispatch => {
    console.log(user)
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => dispatch(login(user.username, user.password)))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
