import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import SoupMenu from '../pages/soup-menu';
import BreakfastMenu from '../pages/breakfast-menu';
import LunchMenu from '../pages/lunch-menu';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about-us' component={AboutUs}/>
            <Route 
              path='/soups'
              render={props => <SoupMenu {...props} />} /> 
            <Route 
              path='/lunch-menu' 
              render={props => <LunchMenu {...props}/>} />
            <Route 
              path='/breakfast-menu'
              render={props => <BreakfastMenu {...props} />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


