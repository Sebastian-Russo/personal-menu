import { 
    GET_RECIPES_SUCCESS, 
    GET_RECIPES_ERROR,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_ERROR,
    UPDATE_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_ERROR,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_ERROR
} from '../actions/menu';

const initialState = {
    editing: false, 
    error: null,
    menuItems: [
        {
        categories: ["Lunch", "Dinner"],
        directions: "fry both sides till brown and cheese melts",
        id: "5f6b4188b951180017a25926",
        ingredients: [ {_id: "5f6b4188b951180017a25927", ingredient: "cheese", amount: "2 slices"},
                    {_id: "5f6b57b8af2e7d0017eeb293", ingredient: "break", amount: "2 slices"} ],
        name: "grilled cheese",
        userId: "5f6a71893258830017041d53"
        },
        {
        categories: ["Lunch", "Breakfast"],
        directions: "Pour cereal first, then milk",
        id: "5f6b4188b951180017a25927",
        ingredients: [ {_id: "5f6b4188b951180017a25928", ingredient: "cereal", amount: "1 bowl"},
                    {_id: "5f6b57b8af2e7d0017eeb294", ingredient: "milk", amount: "2 cups"} ],
        name: "Cereal",
        userId: "5f6a71893258830017041d54"
        },
        {
        categories: ["Lunch", "Dinner"],
        directions: "Boil till tender, pour sauce over",
        id: "5f6b4188b951180017a25925",
        ingredients: [ {_id: "5f6b4188b951180017a25926", ingredient: "pasta", amount: "1 pound"},
                    {_id: "5f6b57b8af2e7d0017eeb292", ingredient: "sauce", amount: "1 jar"} ],
        name: "Quick pasta",
        userId: "5f6a71893258830017041d52"
        }
    ]
}

export default function menuReducer(state=initialState, action) {
    let answer; 

    if (action.type === GET_RECIPES_SUCCESS) {
        answer = Object.assign({}, state, {
            menuItems: action.recipes
        })
        return answer
    }
    if (action.type === GET_RECIPES_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
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
        return answer
    } 
    if (action.type === ADD_RECIPE_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
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
        return answer
    }
    if (action.type === UPDATE_MENU_ITEM_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        return answer
    }


    if (action.type === DELETE_MENU_ITEM_SUCCESS) {
        const selected = state.menuItems.filter(menuItem => menuItem.id !== action.id);
        answer = Object.assign({}, state, {
            menuItems: selected
        })
        return answer
    }
    if (action.type === DELETE_MENU_ITEM_ERROR) {
        answer = Object.assign({}, state, {
            error: action.error
        })
        return answer
    }

    return state;
}





