import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './styles/main/main.scss';
import App from './components/App/App';
import reducers from '../src/store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: reducers
});

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));



function main() {
  ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('.app-wrapper')
  );
}

document.addEventListener('DOMContentLoaded', main);