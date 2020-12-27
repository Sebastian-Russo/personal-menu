import React from 'react'; 

export default class RecipeInput extends React.Component {
    constructor(props){
        super(props);
 
        this.state = {                 
            ingredient: "",
            amount: ""
        }
    }
    // checks if props are coming from edit button 
    componentDidMount() {
        if (this.props.ingredient) {
            this.setState({                 
                ingredient: this.props.ingredient || "",
                amount: this.props.amount || ""
            })
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleClick = e => {
        e.preventDefault();
        if (this.state.ingredient && this.state.amount) {
            this.props.addIngredientAndAmount(this.state);
            // below is to clear the amount and ingredient after each click 
            this.setState({
                amount: "",
                ingredient: ""
            })
        } else {
            console.log('Alert! Please fill in empty ingredient and/or amount before adding to list')
            this.props.alertEmpty()
        }
    }

    render() {
        return (
            <div className="form-input">
                <label htmlFor="ingredient">Ingredient *</label>
                <input 
                    name="ingredient"
                    id="ingredient"
                    type="text"
                    value={this.state.ingredient} // controlled component when using value in input 
                    onChange={this.handleChange} 
                />
                <label htmlFor="amount">Amount *</label>
                <input 
                    name="amount"
                    id="amount"
                    type="text"
                    value={this.state.amount}
                    onChange={this.handleChange} 
                    />
                <button type="button" className="button" onClick={this.handleClick}>Add Amount of Ingredient</button>
            </div>
        );
    }
}
