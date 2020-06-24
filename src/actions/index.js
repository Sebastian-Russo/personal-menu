export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = (name, ingredients, amount, step, direction) => ({
    type: ADD_RECIPE,
    name, 
    ingredients,
    amount,
    step,
    direction
})

