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
    editing: true
})

export const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';
export const deleteMenuItem = () => ({
    type: DELETE_MENU_ITEM
})
