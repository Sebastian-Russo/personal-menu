export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = ({name, ingredient, amount, directions, id, categories}) => ({
    type: ADD_RECIPE,
    name, 
    ingredient,
    amount,
    directions,
    id,
    categories
})
