import React from 'react';
import {reduxForm, Field, 
    // SubmissionError, 
    focus} from 'redux-form';
import InputRecipe from './input-recipe';
import {required, nonEmpty} from '../validators';

export class RecipeForm extends React.Component {

    onSubmit(values) {
        // return fetch('/api/recipe', {
        //     method: 'POST',
        //     body: JSON.stringify(values),
        //     hearders: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => {
        //         if (!res.ok) {
        //             if (
        //                 res.headers.has('content-type') &&
        //                 res.headers
        //                     .get('content-type')
        //                     .startsWith('application/json')
        //             ) {
        //                 return res.json().then(err => Promise.reject(err));
        //             }
        //             return Promise.reject({
        //                 code: res.status, 
        //                 message: res.statusText
        //             });
        //         }
        //         return;
        //     })
            // .then(() => console.log('Submitted with values', values))
        return console.log('Submitted with values', values)
            // .catch(err => {
            //     const {reason, message, location} = err;
            //     if (reason === 'ValidationError') {
            //         return Promise.reject(
            //             new SubmissionError({
            //                 [location]: message
            //             })
            //         );
            //     }
            //     return Promise.reject(
            //         new SubmissionError({
            //             _error: 'Error submitting message/recipe'
            //         })
            //     );
            // });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">
                    {this.props.error}
                </div>
            );
        }

        return (
            <form 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <Field
                    name="recipe-name"
                    type="text"
                    component={InputRecipe}
                    label="Recipe Name"
                    validate={[required, nonEmpty]} 
                />
                <Field 
                    name="ingredients"
                    type="text"
                    component={InputRecipe}
                    label="Ingredients"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="steps"
                    type="text"
                    component={InputRecipe}
                    label="Steps"
                    validate={[required, nonEmpty]}
                />
                {/* <Field 
                    name="pictures"
                    type="pictures"
                    component={InputRecipe}
                    label="Pictures"
                />
                <Field 
                    name="add-menu-category"
                    type="selector text"
                    component={InputRecipe}
                    label="Add to a Menu Category"
                /> */}
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}> 
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