import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        console.log(values)
        this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error; 
        if (this.props.error){
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            )
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                
                <label htmlFor="username">Username</label>
                <Field
                    name="username"
                    id="username"
                    type="text"
                    component={Input}
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field 
                    name="password"
                    id="password"
                    type="password"
                    component={Input}
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login', 
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm)