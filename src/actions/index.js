export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = ({name, ingredients, directions, id, categories}) => ({
    type: ADD_RECIPE,
    name, 
    ingredients,
    directions,
    id,
    categories
})

export const EDIT_DIRECTIONS = 'EDIT_DIRECTIONS';
export const editDirections = directions => ({
    type: EDIT_DIRECTIONS,
    directions
})
