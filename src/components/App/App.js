import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from './MainLayout';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';


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
              <Route exact path='/about-us' component={AboutUs}/>
            </Switch>
          </MainLayout>

        </Router>
      </div>
    );
  }
}


