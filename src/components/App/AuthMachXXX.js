import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../headernavbarfooter/header';
// import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
import Nav from '../Auth/NavMachXX';
import LoginForm from '../Auth/LoginFormmachX';
import SignupForm from '../Auth/SignupFormMachX';
import PhlogManager from '../pages/phlog-manager';


export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // loggedIn: localStorage.getItem('token') ? true : false,
            loggedIn: false,
            username: '',
            displayedForm: ''
        }
    }

    getUserNow() {
        if (this.state.loggedIn) {
            fetch('http://127.0.0.1:8000/login/user_now/', {
                headers: {
                    Authorization : `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(json => {
                this.setState({ username: json.username })
            })
            .catch(error => 
                console.log('checkLoginStatus error', error));
        }
    }

    displayForm = form => {
        this.setState({
            displayedForm: form
        });
    }

    handleLoginChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({ 
            loggedIn: false,
            username: ''
        });
    }

    handleLogin = (event, data) => {
        event.preventDefault();
        // console.log(data);
        fetch('http://127.0.0.1:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.token);
            // console.log(json.token)
            this.setState({
                loggedIn: true,
                displayedForm: '',
                username: json.username
            })
        })
        .catch(error => {
            console.log('handleLogin error', error);
        })
    }

    handleSignup = (event, data) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/login/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    loggedIn: true,
                    displayedForm: '',
                    username: json.username
                });
            });
    }

    componentDidMount() {
        this.getUserNow();
    }

    adminPages() {
        return [
            <Route
                key='phlog-manager'
                path='/phlog-manager'
                component={PhlogManager}
            />
        ]
    }
    
    render() {

        let form;
        switch(this.state.displayedForm) {
            case 'login':
                form = <LoginForm handleLogin={this.handleLogin} />;
                break;
            case 'signup':
                form = <SignupForm handleSignup={this.handleSignup} />;
                break;
            case 'phlogmanager':
                form = <PhlogManager adminPages={this.adminPages} />
                break;
            default:
                form = null;
        }

        return (
            <div className="auth-wrapper">
                <Header/>
                {/* <Navbar /> */}
                <Nav 
                    loggedIn = {this.state.loggedIn}
                    displayForm={this.displayForm}
                    handleLogout={this.handleLogout}
                    adminPages={this.adminPages}
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