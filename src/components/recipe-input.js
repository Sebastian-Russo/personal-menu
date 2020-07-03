import React from 'react'; 

export default class RecipeInput extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {                 
            ingredient: props.ingredient || "",
            amount: props.amount || ""
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.addIngredientAndAmount(this.state);
        // below is to clear the amount and ingredient after each click ?
        this.setState({
            amount: "",
            ingredient: ""
        })
    }

    render() {
        return (
            <div className="form-input">
                <label htmlFor="ingredient"> Ingredient </label>
                <input 
                    name="ingredient"
                    id="ingredient"
                    type="text"
                    // why keep value here?
                    value={this.state.ingredient}
                    onChange={this.handleChange} 
                />
                <label htmlFor="amount"> Amount </label>
                <input 
                    name="amount"
                    id="amount"
                    type="text"
                    // controlled component when using value in input 
                    value={this.state.amount}
                    onChange={this.handleChange} 
                    />
                <button type="button" onClick={this.handleClick}>Add Amount of Ingredients</button>
            </div>
        );
    }
}
