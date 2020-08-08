import { 
    GET_RECIPES_SUCCESS, 
    GET_RECIPES_ERROR,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_ERROR,
    UPDATE_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_ERROR,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_ERROR
} from '../actions';

const initialState = {
    editing: false, 
    error: null,
    menuItems: [
        {
            id: 0,
            name: "grilled cheese",
            categories: ["lunch"],
            ingredients: [
                {
                    ingredient: "bread",
                    id: 1,
                    amount: "2 slices"
                },
                {
                    ingredient: "cheese",
                    id: 2,
                    amount: "2 slices"
                },
                {
                    ingredient: "butter",
                    id: 3,
                    amount: "1 tbps"
                }
            ],
            directions: "put cheese on bread, then pan fry bread till golden brown and cheese has melted"
        },
        {
            id: 1,
            name: "ramen",
            categories: ["snacks", "lunch", "quick-and-easy"],
            ingredients: [
                {
                    ingredient: "roman packet of noodles",
                    id: 1,
                    amount: "1 packet"
                }
            ],
            directions: "boil water, then wait 3 minutes"
        },
        {
            id: 2,
            name: "cereal",
            categories: ["breakfast", "dessert", "quick-and-easy"],
            ingredients: [
                {
                    ingredient: "cereal",
                    id: 1,
                    amount: "2 cups"
                },
                {
                    ingredient: "milk",
                    id: 2,
                    amount: "1 cup"
                }
            ],
            directions: "pour cereal into bowl, then pour milk into bowl"
        },
        {
            id: 3,
            name: "mac & cheese",
            categories: ["lunch", "dinner", "snacks", "quick-and-easy"],
            ingredients: [
                {
                    ingredient: "macaroni",
                    id: 1,
                    amount: "1 lb"
                },
                {
                    ingredient: "cheese",
                    id: 2,
                    amount: "1 cup"
                }
            ],
            directions: "boil pasta for 10 minutes, then mix in cheese to melt"
        }
    ]
}

export default function menuReducer(state=initialState, action) {
    let answer; 

    if (action.type === GET_RECIPES_SUCCESS) {
        answer = Object.assign({}, state, {
            menuItems: action.recipes
        })
        console.log('global store', action, answer)
        return answer
    }
    if (action.type === GET_RECIPES_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        console.log('global store', action, answer)
        return answer
    }


    if (action.type === ADD_RECIPE_SUCCESS) {
        answer = Object.assign({}, state, {
            menuItems: [...state.menuItems, {
                    id: action.id,
                    name: action.name, 
                    categories: action.categories,
                    ingredients: action.ingredients,
                    directions: action.directions
            }]
        })
        console.log('global store', action, answer)
        return answer
    } 
    if (action.type === ADD_RECIPE_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        console.log('global store', action, answer)
        return answer
    }


    if (action.type === UPDATE_MENU_ITEM_SUCCESS) {
        answer = Object.assign({}, state, {
            menuItems: state.menuItems.map(menuItem => menuItem.id === action.id ? {
                id: action.id,
                name: action.name, 
                categories: action.categories,
                ingredients: action.ingredients,
                directions: action.directions
            } : menuItem)
        })
        console.log('global store', action, answer)
        return answer
    }
    if (action.type === UPDATE_MENU_ITEM_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        console.log('global store', action, answer)
        return answer
    }


    if (action.type === DELETE_MENU_ITEM_SUCCESS) {
        const selected = state.menuItems.filter(menuItem => menuItem.id !== action.id);
        answer = Object.assign({}, state, {
            menuItems: selected
        })
        console.log('global store', action, answer)
        return answer
    }
    if (action.type === DELETE_MENU_ITEM_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        console.log('global store', action, answer)
        return answer
    }


    // console.log('global store', action, answer)
    return state;
}





