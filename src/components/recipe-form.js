import React from 'react';
import {reduxForm, 
    // SubmissionError, 
    focus,
    actionTypes} from 'redux-form';
import RecipeInput from './recipe-input';
import RecipeField from './recipe-field';
import RecipeCategories from './recipe-categories';
import {required, nonEmpty} from '../validators';
import { addRecipe } from '../actions';

export class RecipeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
                name: "",
                ingredients: [],
                directions: "",
                categories: [],
                otherCheckbox: true,
                newCategory: []
        }
    }

    addIngredientAndAmount = (ingredient) => {
        ingredient.id = Math.floor(Math.random() * 10000000000);
        this.setState({
            ingredients: [...this.state.ingredients, ingredient]
        });
    };

    deleteIngredientAndAmount = (id) => {
        this.setState({
            ingredients: this.state.ingredients.filter(ingredientAndAmount => {
                return ingredientAndAmount.id !== id
            })
        })
    }

    addCategory = (event) => {
        const category = event.target.value;
        // if state.categories array includes new category, why setState? should it be if it doesn't include?
        if (this.state.categories.includes(category)) {
            this.setState({
                categories: this.state.categories.filter(cat => cat !== category)
            })
        }
        this.setState({ categories: [...this.state.categories, category] })
    }

    handleChange = e => { 
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleNewCategory = (e) => {
        const change = e.target.value;
        this.setState({ newCategory: [change] })
    }

    otherCheckbox = () => {
        this.setState({
            otherCheckbox: !this.state.otherCheckbox
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch(addRecipe(this.state))
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <h2>Add a new favorite recipe!</h2>
                
                    <label htmlFor="name"> Recipe Name </label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        label="Recipe Name"
                        validate={[required, nonEmpty]} 
                        defaultValue="cookies"
                        onChange={this.handleChange}
                    />
                    
                    <RecipeInput 
                        addIngredientAndAmount={this.addIngredientAndAmount}
                    />

                    <label htmlFor="directions"> Directions </label>
                    <textarea 
                        name="directions"
                        id="directions"
                        type="text"
                        rows="4" 
                        cols="25"
                        label="Directions"
                        validate={[required, nonEmpty]}
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>

                    <RecipeCategories 
                        addCategory={this.addCategory}
                    />
                    <input
                        name="categories"
                        id="other"
                        type="checkbox"  
                        value="other"
                        onChange={(e) => this.addCategory(e)}   
                        onChange={this.otherCheckbox}
                    />
                    <label htmlFor="create">Create a new category</label>
                    <input 
                        type="text"
                        id="otherValue"
                        name="other"
                        hidden={!this.state.otherCheckbox ? false : true}
                        onChange={this.handleNewCategory}
                    />

                    <br></br>

                    <button
                        type="submit"
                        // disabled={this.props.pristine || this.props.submitting}
                        onSubmit={this.onSubmit}
                        >
                        Submit 
                    </button>
                </form>

                <br></br>
                <RecipeField 
                    menuItem={this.state}
                    deleteIngredientAndAmount={this.deleteIngredientAndAmount}
                    />
            </div>
        );
    }
}

export default reduxForm({
    form: 'recipe',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('recipe', Object.keys(errors)[0]))
})(RecipeForm);






                {/* <input 
                    name="pictures"
                    type="pictures"
                    component={RecipeInput}
                    label="Pictures"
                /> */}
