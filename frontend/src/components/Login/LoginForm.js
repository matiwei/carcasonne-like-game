import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import LoginFormEntry from './LoginFormEntry';

import './LoginForm.css';
export const LOGIN_FORM_TYPES = { SIGN_UP: 'sign up', SIGN_IN: 'sign in' };

class LoginForm extends PureComponent {
    render() {
        const { type, handler } = this.props;

        return (
            <form className="login-form" onSubmit={(e) => this.onFormSubmit(e, handler)}>
                <div className="login-form__header">
                    <h2 className="login-form__header-title">
                        {_.capitalize(type)}
                    </h2>
                </div>
                <div className="login-form__entries">
                    <LoginFormEntry name="username" required />
                    <LoginFormEntry name="password" required />
                    {
                        type === LOGIN_FORM_TYPES.SIGN_UP &&
                        <LoginFormEntry name="repeat-password" />
                    }
                </div>
                <button className="login-form__button" type="submit">
                    {type.toUpperCase()}
                </button>
            </form>
        );
    }

    onFormSubmit = (e, handler) => {
        e.preventDefault();

        const { target: { username, password, repeatPassword } } = e;

        if (repeatPassword) {
            if (repeatPassword === password) {
                handler.doSend({ type: 'signUp', arg1: username.value, arg2: password.value });
            } else {
                alert('Passwords do not match');
            }
        } else {
            handler.doSend({ type: 'signIn', arg1: username.value, arg2: password.value });
        }

        this.props.history.push('/lobby');
    }
}

export default withRouter(LoginForm);
