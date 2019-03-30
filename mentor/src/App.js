import React, { Component } from 'react';
import './App.css';
import Login  from './Login/Login';
import Signup from './Login/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        {/* <Signup /> */}
      </div>
    );
  }
}

export default App;
