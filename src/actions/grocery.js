export const ADD_TO_GROCERY_LIST = 'ADD_TO_GROCERY_LIST';
export const addToGroceryList = items => ({
    type: ADD_TO_GROCERY_LIST,
    items
})

export const DELETE_ITEM_FROM_GROCERY_LIST = 'DELETE_ITEM_FROM_GROCERY_LIST';
export const deleteItemFromGroceryList = index => ({
    type: DELETE_ITEM_FROM_GROCERY_LIST,
    index
})
