import { API_BASE_URL } from '../config';

export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = ({name, ingredients, directions, id, categories}) => ({
    type: ADD_RECIPE,
    name, 
    ingredients,
    directions,
    id,
    categories
})

export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';
export const updateMenuItem = ({name, ingredients, directions, id, categories}) => ({
    type: UPDATE_MENU_ITEM,
    name, 
    ingredients,
    directions,
    id,
    categories,
})

export const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';
export const deleteMenuItem = id => ({
    type: DELETE_MENU_ITEM,
    id
})

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const addCategory = category => ({
    type: ADD_CATEGORY,
    category
})

export const ADD_TO_GROCERY_LIST = 'ADD_TO_GROCERY_LIST';
export const addToGroceryList = items => ({
    type: ADD_TO_GROCERY_LIST,
    items
})



// const getRecipes = (token) => {
//     fetch(`API_BASE_URL/recipes`, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }).then(res => {
//         return res.json()
//     }).then(json => {
//         console.log(json)
//     });
// }