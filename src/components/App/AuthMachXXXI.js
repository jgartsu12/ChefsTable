import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../headernavbarfooter/header';
import AuthenticatedNavbar from '../headernavbarfooter/navbarMachII';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
// import Nav from '../Auth/NavMachXX';
// import DisplayLoginAndSignupForms from '../Auth/displayloginSignup';
import LoginForm from '../Auth/loginMachXXX';
import SignupForm from '../Auth/SignupFormMachX';
// import PhlogManager from '../pages/phlog-manager';


export default class Auth extends Component {
    render() {

       

        return (
            <div className="auth-wrapper">
                <Header/>
                <AuthenticatedNavbar
                    loggedIn = {this.state.loggedIn}
                    handleLogout={this.handleLogout}
                    displayForm={this.displayForm}
                />
               
                {form}
                <h3>
                    {
                        this.state.loggedIn 
                        ? `Hello, ${this.state.username}`
                        
                        : 'Please Login To Phlog'
                    }
                </h3>
                <SocialMediaFooter/>
            </div>
        );
    }
}