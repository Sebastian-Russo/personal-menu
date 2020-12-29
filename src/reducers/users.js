import {
  ADD_ITEM_TO_GROCERY_LIST,
  DELETE_ITEM_FROM_GROCERY_LIST,
  ADD_CATEGORIES_TO_USER,
  DELETE_CATEGORIES_FROM_USER,
  UPDATE_USER_LISTS_SUCCESS,
  UPDATE_USER_LISTS_ERROR,
  CLEAR_LISTS
} from "../actions/users";
import { ADD_FROM_USER_PROFILE } from "../actions/auth";
import { addToList, updateUser } from '../local-storage';

const userJSON = localStorage.getItem('user');
const user = userJSON ? JSON.parse(userJSON) : {};

const initialState = {
  groceryList: user.groceryList || [],
  categoryList: user.categoryList || ["Breakfast", "Lunch", "Dinner"]
};

export default function userReducer(state = initialState, action) {
  let answer; 

  if (action.type === ADD_FROM_USER_PROFILE) {
    return Object.assign({}, state, {
      groceryList: action.groceryList,
      categoryList: action.categoryList
    });
  }

  if (action.type === ADD_ITEM_TO_GROCERY_LIST) {
    addToList('groceryList', action.item);
    return Object.assign({}, state, {
      groceryList: [...state.groceryList, action.item]
    });
  }

  if (action.type === DELETE_ITEM_FROM_GROCERY_LIST) {
    const selected = state.groceryList.filter(
      (item, index) => index !== action.index
    );
    answer = Object.assign({}, state, {
      groceryList: selected
    });
    updateUser(answer);
  }

  if (action.type === ADD_CATEGORIES_TO_USER) {
    addToList('categoryList', action.category);
    return Object.assign({}, state, {
      categoryList: [...state.categoryList, action.category]
    });
  }

  if (action.type === DELETE_CATEGORIES_FROM_USER) {
    const selected = state.categoryList.filter(
      (item, index) => index !== action.index
    );
    answer = Object.assign({}, state, {
      categoryList: selected
    });
    updateUser(answer);
  }

  if (action.type === UPDATE_USER_LISTS_SUCCESS) {
    return Object.assign({}, state, {
      categoryList: action.categoryList,
      groceryList: action.groceryList
    });
  }
  if (action.type === UPDATE_USER_LISTS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  if (action.type === CLEAR_LISTS) {
    return Object.assign({}, state, {
      groceryList: user.groceryList || [],
      categoryList: user.categoryList || ["Breakfast", "Lunch", "Dinner"]
    })
  }

  return state;
}
