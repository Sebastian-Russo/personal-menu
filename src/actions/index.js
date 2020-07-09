export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = ({name, ingredients, directions, id, categories}) => ({
    type: ADD_RECIPE,
    name, 
    ingredients,
    directions,
    id,
    categories
})

export const EDIT_RECIPE = 'EDIT_RECIPE';
export const editRecipe = () => ({
    type: EDIT_RECIPE,
    editing: !true
})

export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';
export const updateMenuItem = ({name, ingredients, directions, id, categories}) => ({
    type: UPDATE_MENU_ITEM,
    name, 
    ingredients,
    directions,
    id,
    categories
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