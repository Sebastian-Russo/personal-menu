import { API_BASE_URL } from '../config';
import { updateUserLists } from './users';
// GET recipes

export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const getRecipesSuccess = recipes => ({
    type: GET_RECIPES_SUCCESS,
    recipes
})

export const GET_RECIPES_ERROR = 'GET_RECIPES_ERROR';
export const getRecipesError = error => ({
    type: GET_RECIPES_ERROR,
    error
})

// when user logs in, get recipes 
export const getRecipes = (token, userId) => dispatch => {
    fetch(`${API_BASE_URL}/recipes/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        return res.json()
    })
    .then(json => dispatch(getRecipesSuccess(json)))
    .catch(err => {
        dispatch(getRecipesError(err))
    });
}


// POST recipes
// export const addRecipe = ({name, ingredients, directions, id, categories}) => ({
//     type: ADD_RECIPE,
//     name, 
//     ingredients,
//     directions,
//     id,
//     categories
// })

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const addRecipeSuccess = recipe => ({
    type: ADD_RECIPE_SUCCESS,
    recipe
})

export const ADD_RECIPE_ERROR = 'ADD_RECIPE_ERROR';
export const addRecipeError = error => ({
    type: ADD_RECIPE_ERROR,
    error
})

export const addRecipe = (token, recipe) => dispatch => {
  const user = localStorage.getItem('user');
  const { id: userId } = JSON.parse(user);
  recipe.userId = userId; // grab user id from local storage and add it to recipe object 
  console.log('POSTING', recipe);
    fetch(`${API_BASE_URL}/recipes`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json' 
        },
        body: JSON.stringify(recipe)
    })
    .then(res => {
        return res.json()
    })
    .then(json => {
      dispatch(addRecipeSuccess(json))
      dispatch(updateUserLists())
    })
    .catch(err => {
        dispatch(addRecipeError(err))
    })
}


// PUT recipes

export const UPDATE_MENU_ITEM_SUCCESS = 'UPDATE_MENU_ITEM_SUCCESS';
export const updateMenuItemSuccess = recipe => ({
    type: UPDATE_MENU_ITEM_SUCCESS,
    recipe
})

export const UPDATE_MENU_ITEM_ERROR = 'UPDATE_MENU_ITEM_ERROR';
export const updateMenuItemError = error => ({
    type: UPDATE_MENU_ITEM_ERROR,
    error
})

export const updateMenuItem = (token, userId, recipe) => dispatch => {
    fetch(`${API_BASE_URL}/recipes/${userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json' // lets the server know what it's expecting
        },
        body: JSON.stringify(recipe)
    }).then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        dispatch(updateMenuItemSuccess(json)) 
    }).catch(err => {
        dispatch(updateMenuItemError(err))
    });
}


// DELETE recipes

export const DELETE_MENU_ITEM_SUCCESS = 'DELETE_MENU_ITEM_SUCCESS';
export const deleteMenuItemSuccess = recipe => ({
    type: DELETE_MENU_ITEM_SUCCESS,
    recipe
})

export const DELETE_MENU_ITEM_ERROR = 'DELETE_MENU_ITEM_ERROR';
export const deleteMenuItemError = error => ({
    type: DELETE_MENU_ITEM_ERROR,
    error
})

export const deleteMenuItem = (token, recipeId) => dispatch => {
    fetch(`${API_BASE_URL}/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(() => {
        dispatch(deleteMenuItemSuccess(recipeId))
    }).catch(err => {
        dispatch(deleteMenuItemError(err))
    });
}