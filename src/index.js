import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import AppRouter from './router/AppRouter';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL="http://127.0.0.1:3001";

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
