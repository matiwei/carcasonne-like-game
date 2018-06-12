import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import LoginFormEntry from './LoginFormEntry';

import './LoginForm.css';

export const LOGIN_FORM_TYPES = { SIGN_UP: 'sign up', SIGN_IN: 'sign in' };

class LoginForm extends PureComponent {
    render() {
        const { type } = this.props;

        return (
            <form className="login-form" onSubmit={(e) => this.onFormSubmit(e)}>
                <div className="login-form__header">
                    <h2 className="login-form__header-title">
                        {_.capitalize(type)}
                    </h2>
                </div>
                <div className="login-form__entries">
                    <LoginFormEntry name="username" />
                    <LoginFormEntry name="password" />
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

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/lobby');

        console.info('Form submitted');
    }
}

export default withRouter(LoginForm);
