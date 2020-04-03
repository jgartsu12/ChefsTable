import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

// const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './styles/main/main.scss';
import App from './components/App/App';
// import reducers from './store/reducers'

function main() {
  ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    // </Provider>
    , document.querySelector('.app-wrapper')
  );
}

document.addEventListener('DOMContentLoaded', main);

