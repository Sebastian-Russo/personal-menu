import React from 'react'; 

export default class RecipeInput extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            ingredients: [
                {
                    ingredient: "",
                    amount: ""
                }
            ]
        }
    }


    handleChange = (e) => {
        const {value} = e.target;
        const {id} = e.target;
        this.setState({
            [id]: value
        })
    }

    handleClick = () => {
        this.props.addIngredientAndAmount(this.state)
    }

    render() {
        return (
            <div className="form-input">

                <label htmlFor="ingredients"> Ingredient </label>
                <input 
                    name="ingredients"
                    id="ingredients"
                    type="text"
                    defaultValue='sugar'
                    onChange={this.handleChange} 
                    >
                </input>
                <label htmlFor="amount"> Amount </label>
                <input 
                    name="amount"
                    id="amount"
                    type="text"
                    defaultValue='1 cup'
                    onChange={this.handleChange} 
                    >
                </input>
                <button
                    type="button"
                    onClick={this.handleClick} 
                    >
                    Add Amount of Ingredients
                </button>


            </div>
        );
    }
}
 














 {/* <input 
                    type="checkbox"
                    name="category"
                    value="breakfast">
                    Breakfast
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="lunch">
                    Lunch
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="snacks">
                    Snacks
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="dinner">
                    Dinner
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="deserts">
                    Deserts
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="quick">
                    Quick
                </input>
                <input 
                    type="checkbox"
                    name="category"
                    value="Cheap">
                    Cheap
                </input> */}