import React, { PureComponent } from 'react';

import './LoginFormEntry.css';

class LoginFormEntry extends PureComponent {
    render() {
        return (
                <div className="login-form__entry">
                    <label className="login-form__label">
                        {this.props.children}
                    </label>
                    <input className="login-form__input" />
                </div>
        );
    }
}

export default LoginFormEntry;
