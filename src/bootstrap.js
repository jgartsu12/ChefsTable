import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './styles/main/main.scss';
import App from './components/App/App';
// // import history from './history';



function main() {
  ReactDOM.render (
    <App/>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

//     // <Provider store={createStoreWithMiddleware(reducers)}>
//       <Router history={history}>
//         <Layout>
//           <Switch>
            
//           </Switch>
//         </Layout>
//       </Router>
//     </Provider>