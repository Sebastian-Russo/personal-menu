import {
  ADD_ITEM_TO_GROCERY_LIST,
  DELETE_ITEM_FROM_GROCERY_LIST,
  ADD_CATEGORIES_TO_USER,
  DELETE_CATEGORIES_FROM_USER,
  UPDATE_USER_LISTS_SUCCESS,
  UPDATE_USER_LISTS_ERROR,
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
    answer = Object.assign({}, state, {
      groceryList: action.groceryList,
      categoryList: action.categoryList
    });
    console.log('ADD_FROM_USER_PROFILE', action, answer);
    return answer;
  }

  // update grocery list connected to user
  if (action.type === ADD_ITEM_TO_GROCERY_LIST) {
    addToList('groceryList', action.item);
    answer = Object.assign({}, state, {
      groceryList: [...state.groceryList, action.item]
    });
    console.log("ADD_TO_GROCERY_LIST", action, answer);
    return answer;
  }

  if (action.type === DELETE_ITEM_FROM_GROCERY_LIST) {
    const selected = state.groceryList.filter(
      (item, index) => index !== action.index
    );
    answer = Object.assign({}, state, {
      groceryList: selected
    });
    updateUser(answer);
    console.log("DELETE_ITEM_FROM_GROCERY_LIST", action, answer);
    return answer;
  }

  if (action.type === ADD_CATEGORIES_TO_USER) {
    addToList('categoryList', action.category);
    answer = Object.assign({}, state, {
      categoryList: [...state.categoryList, action.category]
    });
    console.log("ADD_CATEGORIES_TO_USER", action, answer);
    return answer;
  }

  if (action.type === DELETE_CATEGORIES_FROM_USER) {
    const selected = state.categoryList.filter(
      (item, index) => index !== action.index
    );
    answer = Object.assign({}, state, {
      categoryList: selected
    });
    updateUser(answer);
    console.log("DELETE_CATEGORIES_FROM_USER", action, answer);
    return answer;
  }

  // update categoryList connected to user

  if (action.type === UPDATE_USER_LISTS_SUCCESS) {
    answer = Object.assign({}, state, {
      categoryList: action.categoryList,
      groceryList: action.groceryList
    });
    console.log("UPDATE_USER_CATEGORY_LIST_SUCCESS", action, answer);
    return answer;
  }
  if (action.type === UPDATE_USER_LISTS_ERROR) {
    answer = Object.assign({}, state, {
      error: action.error
    });
    console.log("UPDATE_USER_CATEGORY_LIST_ERROR", action, answer);
    return answer;
  }

  return state;
}
