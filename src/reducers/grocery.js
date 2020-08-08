import { ADD_TO_GROCERY_LIST, DELETE_ITEM_FROM_GROCERY_LIST } from '../actions';

const initialState = {
    groceryList: ['test 1', 'test 2', 'test 3']
}

export default function groceryReducer(state=initialState, action) {
    let answer; 
    if (action.type === ADD_TO_GROCERY_LIST) {
        answer = Object.assign({}, state, {
            groceryList: [...state.groceryList.concat(action.items)]
        })
        console.log('global store', action, answer)
        return answer
    }
    if (action.type === DELETE_ITEM_FROM_GROCERY_LIST) {
        const selected = state.groceryList.filter((item, index) => index !== action.index)
        answer = Object.assign({}, state, {
                groceryList: selected
        })
        console.log('global store', action, answer)
        return answer
    }
    // console.log('global store', action, answer)
    return state;
}

