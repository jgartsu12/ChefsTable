import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from './MainLayout';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <MainLayout />

        </Router>
      </div>
    );
  }
}


