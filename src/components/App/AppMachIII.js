import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/home';
import NavContainer from '../headernavbarfooter/navcontainerMachX';
import AboutUs from '../pages/about-us';
import SoupMenu from '../pages/soup-menu';
import BreakfastMenu from '../pages/breakfast-menu';
import LunchMenu from '../pages/lunch-menu';
import Phlog from '../pages/phlog';
import PhlogManager from '../pages/phlog-manager';
import Auth from '../pages/authMACHXXXXX';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: '',
            displayedForm: '',
        }
    }

    componentDidMount() {
        if (this.state.loggedIn) {
            fetch('http://127.0.0.1:8000/login/user_now/', {
                headers: {
                    Authorization : `JWT ${localStorage.getItem('token')}`
                }
            })
           
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    username: json.username
                 })
            });
        }
    }

    handleLogin = (event, data) => {
        event.preventDefault();
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
                username: json.user.username
            })
        })
        .catch(error => {
            console.log('handleLogin error', error);
        });
    };
  
    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({ 
            loggedIn: false,
            username: ''
        });
    };

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
    };

    displayForm = form => {
        this.setState({
            displayedForm: form
        });
    };

    authorizedPages() {
        return [
          <Route
            key="phlog-manager"
            path="/phlog-manager/"
            component={PhlogManager}
          />
        ];
      }
    
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <NavContainer
                            loggedIn={this.state.loggedIn}
                            handleLogout={this.handleLogout}
                        />

                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about-us' component={AboutUs}/>
                            <Route 
                                path='/soups'
                                render={props => <SoupMenu {...props} />} /> 
                            <Route 
                                path='/breakfast-menu'
                                render={props => <BreakfastMenu {...props} />}/>
                            <Route 
                                path='/lunch-menu' 
                                render={props => <LunchMenu {...props}/>} />
                            <Route 
                                path='/phlog'
                                render={props => <Phlog {...props}/>} />
                            <Route 
                                path='/auth'
                                render={props => 
                                    <Auth
                                        {...props}
                                        // loggedIn={this.state.loggedIn}
                                        handleLogin={this.handleLogin}
                                        displayForm={this.displayForm}
                                        // handleSuccessfulLoginStatus={this.handleSuccessfulLoginStatus}
                                        // handleUnsuccessfulLoginStatus={this.handleUnsuccessfulLoginStatus}
                                        // handleSignup={this.handleSignup}
                                        // handleLogout={this.handleLogout}
                                        />} 
                                    />
                           
                            {
                                this.state.loggedIn
                                ? this.authorizedPages()
                                : null
                            }
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
