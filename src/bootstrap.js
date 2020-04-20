import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom'
// import thunk from 'redux-thunk';

import './styles/main/main.scss';
import App from './components/App/App';
// import reducers from './store/reducers/auth';

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithMiddleWare = applyMiddleware()(createStore);


// const store = createStore(reducers, composeEnhances(applyMiddleware(thunk)));

function main() {
  ReactDOM.render(
    // <Provider store={store}>
      <BrowserRouter> 
        <App/>
      </BrowserRouter>
    // </Provider>
    , document.querySelector('.app-wrapper')
  );
}

document.addEventListener('DOMContentLoaded', main);