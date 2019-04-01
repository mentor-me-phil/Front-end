import React, { Component } from 'react';
import './App.css';
import Login  from './Login/Login';
import { Route, Link } from 'react-router-dom';
import Signup from './Login/Signup';
import QuestionPage from './QandA/QuestionPage';
import Navigation from './Profile/Navigation';
import Profile from './Profile/Profile';
import Home from './Profile/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Route exact path='/' component={Signup} />
        <Route path='/questions' component={QuestionPage} />
        <Route path='/navigation' component={Navigation} />
        <Route path='/profile' component={Profile} />
        <Route path='/home' component={Home} />
        <Link path='/signup'>Register</Link>
      </div>
    );
  }
}

export default App;
