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
    //             steps: [
    //                 {
    //                     step: 1,
    //                     direction: ""    
    //                 }
    //             ],
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
            steps: [
                {
                    step: 1,
                    direction: "put cheese on bread"
                },
                {
                    step: 2,
                    direction: "pan fry bread till golden brown and cheese has melted"
                }
            ]
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
            steps: [
                {
                    step: 1,
                    direction: "boil water",
                },
                {
                    step: 2, 
                    direction: "wait 3 minutes"
                }
            ]
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
            steps: [
                {
                    step: 1,
                    direction: "pour cereal into bowl"
                },
                {
                    step: 2,
                    direction: "pour milk into bowl"
                }
            ]
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
                    steps: [
                        {
                            step: action.step,
                            direction: action.direction  
                        }
                    ]
            }]
        })
    }
    console.log(state)
    return state;
}