/*** API AJAX REQUESTS ***/

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
    }).then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        dispatch(getRecipesSuccess(json))
    }).catch(err => {
        dispatch(getRecipesError(err))
    });
}


// export const ADD_RECIPE = 'ADD_RECIPE';
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

export const addRecipe = (token, userId) => dispatch => {
    fetch(`${API_BASE_URL}/recipes/${userId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        dispatch(addRecipeSuccess(json))
    }).catch(err => {
        dispatch(addRecipeError(err))
    });
}




// export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';
// export const updateMenuItem = ({name, ingredients, directions, id, categories}) => ({
//     type: UPDATE_MENU_ITEM,
//     name, 
//     ingredients,
//     directions,
//     id,
//     categories,
// })

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

export const updateMenuItem = (token, userId) => dispatch => {
    fetch(`${API_BASE_URL}/recipes/${userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        dispatch(updateMenuItemSuccess(json))
    }).catch(err => {
        dispatch(updateMenuItemError(err))
    });
}



// export const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';
// export const deleteMenuItem = id => ({
//     type: DELETE_MENU_ITEM,
//     id
// })

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

export const deleteMenuItem = (token, userId) => dispatch => {
    fetch(`${API_BASE_URL}/recipes/${userId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        dispatch(deleteMenuItemSuccess(json))
    }).catch(err => {
        dispatch(deleteMenuItemError(err))
    });
}