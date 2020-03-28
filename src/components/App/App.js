import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from './MainLayout';
import Home from '../pages/home';

export default class App extends Component {
  // constructor(props) {
  //   super(props);

  //   Icons();
  // }
  render() {
    return (
      <div className="container">
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </MainLayout>

        </Router>
      </div>
    );
  }
}


