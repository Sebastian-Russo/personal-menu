import {ADD_RECIPE, EDIT_RECIPE} from '../actions';

const initialState = {
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
            categories: ["breakfast", "quick-and-easy"],
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
        }
    ]
}

export default function menuReducer(state=initialState, action) {
    let answer; 
    if (action.type === ADD_RECIPE) {
        answer = Object.assign({}, state, {
            menuItems: [...state.menuItems, {
                    id: Math.floor(Math.random() * 10000000000),
                    name: action.name, 
                    categories: action.categories,
                    ingredients: action.ingredients,
                    directions: action.directions
            }]
        })
        console.log('global store', action, answer)
        return answer
    } else if (action.type === EDIT_RECIPE) {
        answer = Object.assign({}, state, {
            editing: !state.editing
        })
        console.log('global store', action, answer)
        return answer
    }
    console.log('global store', action, answer)
    return state;
}

