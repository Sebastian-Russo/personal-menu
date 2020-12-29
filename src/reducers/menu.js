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
    menuItems: []
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





