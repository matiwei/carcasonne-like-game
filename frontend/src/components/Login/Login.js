import React, { PureComponent } from 'react';

import LoginForm, { LOGIN_FORM_TYPES } from './LoginForm';

import './Login.css';
import sword from '../../assets/sword.png';

class Login extends PureComponent {
    render() {
        return (
            <div className="login">
                <div className="login__header">
                    <img src={sword} className="login__logo" />
                    <h1 className="login__name">
                        Medieval Game
                    </h1>
                </div>
                <div className="login__forms-wrapper">
                    <LoginForm type={LOGIN_FORM_TYPES.SIGN_UP} />
                    <LoginForm type={LOGIN_FORM_TYPES.SIGN_IN} />
                </div>
            </div>
        );
    }
}

export default Login;
