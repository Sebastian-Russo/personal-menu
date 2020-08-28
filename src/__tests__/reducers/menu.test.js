import "../../__tests__/setup/setupTests"

import { menuReducer } from '../../reducers/menu';
import { 
    GET_RECIPES_SUCCESS,
    GET_RECIPES_ERROR,
    getRecipes,

    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_ERROR,
    addRecipe,

    UPDATE_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_ERROR,
    updateMenuItem,

    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_ERROR,
    deleteMenuItem
} from '../../actions;'

describe('menuReducer', () => {
    
    it('Should get recipes')
})