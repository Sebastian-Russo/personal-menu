import {ADD_CATEGORY} from '../actions';

const initialState = {
    categoryList: ['breakfast', 'lunch', 'dinner', 'dessert', 'snacks', 'quick-and-easy']
}

export default function categoryReducer(state=initialState, action) {
    let answer;
    if (action.type === ADD_CATEGORY) {
        answer = Object.assign({}, state, {
            categoryList: [...state.categoryList, action.category]
        })
        console.log('global store', action, answer)
        return answer
    }
    // console.log('global store', action, answer)
    return state;
}
