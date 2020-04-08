import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import * as actions from '../../store/actions/auth';
// import history from '../../history';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import SoupMenu from '../pages/soup-menu';
import BreakfastMenu from '../pages/breakfast-menu';
import LunchMenu from '../pages/lunch-menu';
import Phlog from '../pages/phlog';
import PhlogManager from '../pages/phlog-manager'
// import LoginForm from '../Auth/login-form';
// import SignUpForm from '../Auth/signup-form';

export default class App extends Component {
  
  // componentDidMount() {
  //   this.props.onAuthorized();
  // }

  render() {
    return (
      <div className="container">
         <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about-us/' component={AboutUs}/>
            <Route 
              path='/soups/'
              render={props => <SoupMenu {...props} />} /> 
            <Route 
              path='/breakfast-menu/'
              render={props => <BreakfastMenu {...props} />}/>
            <Route 
              path='/lunch-menu/' 
              render={props => <LunchMenu {...props}/>} />
            <Route 
              path='/phlog/'
              render={props => <Phlog {...props}/>} /> 
             <Route path='phlog-manager' 
              path='/phlog-manager/'
              render={props => <PhlogManager {...props}/>} /> 
            {/* <Route exact path='/login/' component={LoginForm}/>
            <Route exact path='/signup/' component={SignUpForm} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

// // give auth to use a prop
// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.token !== null
//   }
// }

// // map a Method to use as a prop
// const mapDispatchToProps = dispatch =>  {
//   return {
//     onAuthorized: () => dispatch(actions.authCheckState())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
