import React, { Component } from 'react';
import './App.css';
import Login  from './Login/Login';
import { Route, Link } from 'react-router-dom';
import Signup from './Login/Signup';
import QuestionPage from './QandA/QuestionPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Route exact path='/' component={Signup} />
        <Route path='/questions' component={QuestionPage} />
        <Route path='/Navigation' component={Navigation} />
        <Route path='/Profile' component={Profile} />
        <Link path='/signup'>Register</Link>
      </div>
    );
  }
}

export default App;
