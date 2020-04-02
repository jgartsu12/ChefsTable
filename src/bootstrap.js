import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './styles/main/main.scss';
import App from './components/App/App';
// // import history from './history';

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

