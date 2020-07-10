import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        console.log(values)
    }

    render() {
        return (
            <form
                className='login-form'
                // onSubmit={this.handleSubmit(values => this.onSubmit(values))} 
                >
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="username"
                    validate={[]} 
                />
                <label htmlFor="password">Password</label>
                <Field 
                    component={Input}
                    type="password"
                    name="password"
                    validate={[]}
                />
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[]}
                />
                <button
                    onSubmit={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
            
            </form>
        )
    }
    
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);