import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import Lobby from './components/Lobby/Lobby';
import WebSocketHandler from './components/WebSocketHandler/WebSocketHandler';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { handler: new WebSocketHandler(), messages: [] };
        this.state.handler.init();

        const oldOnMessage = this.state.handler.onMessage;
        this.state.handler.onMessage = (e) => {
            oldOnMessage(e);
            this.setState({ messages: this.state.messages.concat(JSON.parse(e.data))});
        }
    }

    render() {
        const { handler, messages } = this.state;

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" render={() => <Login handler={handler} />} />
                    <Route exact path="/lobby" render={() => <Lobby handler={handler} messages={messages} />} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
