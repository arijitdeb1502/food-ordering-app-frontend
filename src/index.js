import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import signupReducer from './store/reducers/Signup';
import axios from 'axios';

axios.defaults.baseURL="http://127.0.0.1:3001";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  signup: signupReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject({...error}.response.status+":"+{...error}.response.data.error);
});


ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
  document.getElementById('root')
);