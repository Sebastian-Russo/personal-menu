// import {} from '../actions';

// const initialState = {
//     menu: {
//         name: "",
//         ingredients: [
//             {
//                 ingredient: "",
//                 amount: ""
//             },
//         ],
//         steps: [
//             {
//                 "Step 1": "instruction"    
//             }
//         ],
//         pictures: [],
//         category: []
//     }
// }

const initialState = {
    menuItems: [
        {
            id: 0,
            name: "grilled cheese",
            ingredients: [
                {
                    item: "bread",
                    amount: "2 slices"
                },
                {
                    item: "cheese",
                    amount: "2 slices"
                },
                {
                    item: "butter",
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
                    item: "roman packet of noodles",
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
                    item: "cereal",
                    amount: "2 cups"
                },
                {
                    item: "milk",
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
    // if (action.type) {
    //     return 
    // }
    return state;
}