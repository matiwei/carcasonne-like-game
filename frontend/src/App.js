import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Lobby from './components/Lobby/Lobby';

import './App.css';

class App extends PureComponent {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/lobby" component={Lobby} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
