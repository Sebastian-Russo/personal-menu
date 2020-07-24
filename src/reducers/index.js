import {ADD_RECIPE, DELETE_MENU_ITEM, UPDATE_MENU_ITEM, ADD_CATEGORY, ADD_TO_GROCERY_LIST} from '../actions';

const initialState = {
    groceryList: ['test'],
    editing: false,
    categoryList: ['breakfast', 'lunch', 'dinner', 'dessert', 'snacks', 'quick-and-easy'],
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
    if(action.type === ADD_CATEGORY) {
        answer = Object.assign({}, state, {
            categoryList: [...state.categoryList, action.category]
        })
        console.log('global store', action, answer)
        return answer
    }
    if (action.type === ADD_RECIPE) {
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
    if (action.type === UPDATE_MENU_ITEM) {
        answer = Object.assign({}, state, {
            menuItems: state.menuItems.map(menuItem => menuItem.id === action.id ? {
                id: action.id,
                name: action.name, 
                categories: action.categories,
                ingredients: action.ingredients,
                directions: action.directions
            } : menuItem)
        })
    }
    if (action.type === DELETE_MENU_ITEM) {
        const selected = state.menuItems.filter(menuItem => menuItem.id !== action.id);
        answer = Object.assign({}, state, {
            menuItems: selected
        })
        console.log('global store', action, answer)
        return answer
    }
    if (action.type === ADD_TO_GROCERY_LIST) {
        answer = Object.assign({}, state, {
            groceryList: [...state.groceryList, action.items]
        })
        console.log('global store', action, answer)
        return answer
    }
    console.log('global store', action, answer)
    return state;
}


// edit recipe... can i use add recipe, or should i make a new action? 
// check id of menu item, if matches action.id, filter menu items 
// need to find recipe with id to replace recipe/menu item with new edited version



