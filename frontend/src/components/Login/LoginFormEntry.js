import React, { PureComponent } from 'react';
import _ from 'lodash';

import './LoginFormEntry.css';

class LoginFormEntry extends PureComponent {
    render() {
        const { name } = this.props;
        return (
            <div className="login-form__entry">
                <label className="login-form__label">
                    {_.capitalize(name.replace('-', ' '))}
                </label>
                <input className="login-form__input" name={name} />
            </div>
        );
    }
}

export default LoginFormEntry;
