import React from 'react';
import {reduxForm, Field, 
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
                id: Math.random(),
                name: null,
                ingredients: [],
                directions: "",
                categories: []
        }
    }

    addIngredientAndAmount = (ingredientAndAmount) => {
        ingredientAndAmount.id = Math.random();
        this.setState({
            ingredients: [...this.state.ingredients, ingredientAndAmount]
        })
        // console.log(this.state)
    }

    deleteIngredientAndAmount = (id) => {
        this.setState({
            ingredients: this.state.ingredients.filter(ingredientAndAmount => {
                // console.log(ingredientAndAmount.id, id) 
                return ingredientAndAmount.id !== id
            })
        })
    }

    addCategories = (categories) => {
        console.log('adding categories to parent state', categories)
        this.setState({ categories: [...this.state.categories, categories] })
    }

    handleChange = e => { 
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('dispatch addRecipe', this.state);

        this.props.dispatch(addRecipe(this.state))
    }
    
    render() {
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                    >

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
                        defaultValue="mix and bake"
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>

                    <RecipeCategories 
                        addCategories={this.addCategories}
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
