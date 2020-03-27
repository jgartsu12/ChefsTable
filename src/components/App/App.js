import React, { Component } from 'react';
// import axios from 'axios';
import Header from '../headernavbarfooter/header';
import Navbar from '../headernavbarfooter/navbar';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar/>
      </div>
    );
  }
}


