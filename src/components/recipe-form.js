import React from 'react';
import {reduxForm, Field, 
    // SubmissionError, 
    focus} from 'redux-form';
import RecipeInput from './recipe-input';
import RecipeField from './recipe-field';
import {required, nonEmpty} from '../validators';
import { addRecipe } from '../actions';

export class RecipeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
                id: Math.random(),
                name: "",
                ingredients: [
                    {
                        ingredient: "",
                        amount: ""
                    }
                ],
                directions: ""
        }
    }

    addIngredientAndAmount = (ingredientAndAmount) => {
        ingredientAndAmount.id = Math.random();
        this.setState({
            ingredients: [...this.state.ingredients, ingredientAndAmount]
        })
    }

    deleteIngredientAndAmount = (id) => [

    ]

    handleChange = e => { 
        const {value} = e.target;
        const {id} = e.target;
        this.setState({
            [id]: value
        })
        
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.handleChange(e)
        console.log(this.state);
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
                        deleteIngredientAndAmount={this.deleteIngredientAndAmount}
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
                    <button
                        type="submit"
                        // disabled={this.props.pristine || this.props.submitting}
                        onSubmit={this.onSubmit}
                        >
                        Submit 
                    </button>
                </form>
                <br></br>
                <RecipeField recipe={this.state}/>
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
                {/* <input 
                    name="add-menu-category"
                    type="selector text"
                    component={RecipeInput}
                    label="Add to a Menu Category"
                /> */}