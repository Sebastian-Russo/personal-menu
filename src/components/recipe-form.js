import React from 'react';
import {reduxForm, Field, 
    // SubmissionError, 
    focus} from 'redux-form';
import RecipeInput from './recipe-input';
import {required, nonEmpty} from '../validators';
// import { addRecipe } from '../actions';

export class RecipeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            menuItems:[
                {
                    id: 0,
                    name: "",
                    ingredients: [
                        {
                            ingredient: "",
                            amount: ""
                        }
                    ],
                    steps: [
                        {
                            step: 1,
                            direction: ""    
                        }
                    ]
                }
            ]
        }
    }

    onSubmit = (values) => {

        console.log('Submitted with values', values)

        // this.props.dispatch(addRecipe(values));
    }
    
    render() {
        // let successMessage;
        // if (this.props.submitSucceeded) {
        //     successMessage = (
        //         <div className="message message-success">
        //             Message submitted successfully
        //         </div>
        //     );
        // }

        // let errorMessage;
        // if (this.props.error) {
        //     errorMessage = (
        //         <div className="message message-error">
        //             {this.props.error}
        //         </div>
        //     );
        // }

        return (
            <form 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
                >
                {/* {successMessage}
                {errorMessage} */}

                <h2>Add a new favorite recipe!</h2>

                <Field
                    name="name"
                    type="text"
                    component={RecipeInput}
                    label="Recipe Name"
                    validate={[required, nonEmpty]} 
                />
                <Field 
                    name="ingredients"
                    type="text"
                    component={RecipeInput}
                    label="Ingredients"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="amount"
                    type="text"
                    component={RecipeInput}
                    label="Amount"
                    validate={[required, nonEmpty]}
                />

                <Field 
                    name="step"
                    type="text"
                    component={RecipeInput}
                    label="Step Number"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="direction"
                    type="text"
                    component={RecipeInput}
                    label="Direction"
                    validate={[required, nonEmpty]}
                />

                    <br></br>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                    onSubmit={this.onSubmit}
                    >
                    Submit 
                </button>

            </form>
        );
    }
}

export default reduxForm({
    form: 'recipe',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('recipe', Object.keys(errors)[0]))
})(RecipeForm);







                {/* <Field 
                    name="pictures"
                    type="pictures"
                    component={RecipeInput}
                    label="Pictures"
                /> */}
                {/* <Field 
                    name="add-menu-category"
                    type="selector text"
                    component={RecipeInput}
                    label="Add to a Menu Category"
                /> */}