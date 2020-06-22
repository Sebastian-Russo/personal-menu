// import {} from '../actions';

// const initialState = {
//     menu: {
//         name: "",
//         ingredients: [],
//         steps: [],
//         pictures: [],
//         category: []
//     }
// }

const initialState = {
    menuItems: [
        {
            id: 0,
            name: "grilled cheese",
            ingredients: ["bread", "cheese", "butter"],
            steps: ["put cheese on bread", "pan fry bread till golden brown and cheese has melted"]
        },
        {
            id: 1,
            name: "ramen",
            ingredients: ["roman packet of noodles"],
            steps: ["boil water", "wait 3 minutes"]
        },
        {
            id: 2,
            name: "cereal",
            ingredients: ["cereal", "milk"],
            steps: ["pour cereal into bowl", "pour milk into bowl"]
        }
    ]
}


export default function menuReducer(state=initialState, action) {
    // if (action.type) {
    //     return 
    // }
    return state;
}