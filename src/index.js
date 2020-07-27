import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL="http://127.0.0.1:3001";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//   auth: authReducer
// });

// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ));

const app=(
  // <Provider store={store}>
    <AppRouter />
  // </Provider>
)


axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  // console.log(error);
  return Promise.reject({...error}.response.status+":"+{...error}.response.data.error);
});


ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
