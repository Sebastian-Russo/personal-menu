import {ADD_RECIPE} from '../actions';

// const initialState = {
    // menuItems: [{
    //             id: 0,
    //             name: "",
    //             ingredients: [
    //                 {
    //                     ingredient: "",
    //                     amount: ""
    //                 },
    //             ],
    //             directions: "",
    //             pictures: [],
    //             category: []
    // }]
// }

const initialState = {
    menuItems: [
        {
            id: 0,
            name: "grilled cheese",
            ingredients: [
                {
                    ingredient: "bread",
                    amount: "2 slices"
                },
                {
                    ingredient: "cheese",
                    amount: "2 slices"
                },
                {
                    ingredient: "butter",
                    amount: "1 tbps"
                }
            ],
            directions: "put cheese on bread, then pan fry bread till golden brown and cheese has melted"
        },
        {
            id: 1,
            name: "ramen",
            ingredients: [
                {
                    ingredient: "roman packet of noodles",
                    amount: "1 packet"
                }
            ],
            directions: "boil water, then wait 3 minutes"
        },
        {
            id: 2,
            name: "cereal",
            ingredients: [
                {
                    ingredient: "cereal",
                    amount: "2 cups"
                },
                {
                    ingredient: "milk",
                    amount: "1 cup"
                }
            ],
            directions: "pour cereal into bowl, then pour milk into bowl"
        }
    ]
}


export default function menuReducer(state=initialState, action) {
    if (action.type === ADD_RECIPE) {
        console.log('action added recipe')

        return Object.assign({}, state, {
            menuItems: [...state.menuItems, {
                    id: state.menuItems.length,
                    name: action.name, 
                    ingredients: [
                        {
                            ingredient: action.ingredient,
                            amount: action.amount
                        },
                    ],
                    directions: action.directions
            }]
        })
    }
    // console.log(state)
    return state;
}