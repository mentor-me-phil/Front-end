import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './reducer/authReducer';
import questionReducer from './reducer/questionReducer';
import { combineReducers } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

const rootReducer = combineReducers({
    auth: authReducer,
    question: questionReducer
  });
  

const store = createStore( rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
      <Router>
       <App />
      </Router>
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
