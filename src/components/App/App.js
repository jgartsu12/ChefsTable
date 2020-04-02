import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import SoupMenu from '../pages/soup-menu';
// import BreakfastMenu from '../pages/breakfast-menu';
// import LunchMenu from '../pages/lunch-menu';

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
            <Route exact path='/soups-menu' component={SoupsMenu}/> 
            {/* <Route exact path='/lunch-menu' component={LunchMenu}/> */}
            {/* <Route exact path='/breakfast-menu' component={BreakfastMenu}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}


