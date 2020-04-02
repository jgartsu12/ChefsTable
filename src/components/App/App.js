import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import MainLayout from './MainLayout';
// import Header from '../headernavbarfooter/header' ;
// import Navbar from '../headernavbarfooter/navbar';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
// import SoupMenu from '../pages/soup-menu';
// import BreakfastMenu from '../pages/breakfast-menu';
// import LunchMenu from '../pages/lunch-menu';
// import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';

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
            {/* <Route exact path='/lunch-menu' component={LunchMenu}/> */}
            {/* <Route exact path='/soups-menu' component={SoupsMenu}/>  */}
            {/* <Route exact path='/breakfast-menu' component={BreakfastMenu}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}


