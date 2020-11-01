import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'fontsource-roboto';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import signupReducer from './store/reducers/auth';
import filterReducer from './store/reducers/filter';
import axios from 'axios';

//Hosting URL: https://food-ordering-app-frontend.web.app
axios.defaults.baseURL="https://adeb-test-food-order-backend.herokuapp.com/";
// axios.defaults.baseURL="https://localhost:3001/";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  signup: signupReducer,
  filter: filterReducer
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
      {/* <StylesProvider injectFirst> */}
        <AppRouter />
      {/* </StylesProvider> */}
    </Provider>,
  document.getElementById('root')
);