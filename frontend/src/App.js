import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Login from './components/Login/Login';

import './App.css';

class App extends PureComponent {
  render() {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
  }
}

export default App;
