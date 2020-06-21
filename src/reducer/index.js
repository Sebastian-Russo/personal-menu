// import {} from '../actions';

const initialState = {
    menu: {
        name: "",
        ingredients: [],
        steps: [],
        pictures: [],
        category: []
    }
}


export function menuReducer(state=initialState, action) {
    if (action.type) {
        return 
    }
    return state;
}