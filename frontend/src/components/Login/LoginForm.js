import React, { PureComponent } from 'react';
import _ from 'lodash';

import LoginFormEntry from './LoginFormEntry';

import './LoginForm.css';

export const LOGIN_FORM_TYPES = { SIGN_UP: 'sign up', SIGN_IN: 'sign in' };

class LoginForm extends PureComponent {
    render() {
        const { type } = this.props;

        return (
            <form className="login-form">
                <div className="login-form__header">
                    <h2 className="login-form__header-title">
                        {_.capitalize(type)}
                    </h2>
                </div>
                <div className="login-form__entries">
                    <LoginFormEntry>
                        Username
                    </LoginFormEntry>
                    <LoginFormEntry>
                        Password
                    </LoginFormEntry>
                    {
                        type === LOGIN_FORM_TYPES.SIGN_UP &&
                        <LoginFormEntry>
                            Repeat password
                        </LoginFormEntry>
                    }
                </div>
                <button className="login-form__button" type="submit">
                    {type.toUpperCase()}
                </button>
            </form>
        );
    }
}

export default LoginForm;
