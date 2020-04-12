import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import * as actions from '../../store/actions/auth';
// import history from '../../history';
import Navigate from '../headernavbarfooter/navigation';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import SoupMenu from '../pages/soup-menu';
import BreakfastMenu from '../pages/breakfast-menu';
import LunchMenu from '../pages/lunch-menu';
import Phlog from '../pages/phlog';
import PhlogManager from '../pages/phlog-manager'
import LoginForm from '../Auth/login-form';
import SignUpForm from '../Auth/signup-form';
// import AdminRoute from '../Auth/AdminRoute';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInStatus: 'NOT_LOGGED_IN'
        };

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    }

    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: 'LOGGED_IN'
        });
    }

    handleUnsuccessfulLogin() {
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN'
        });
    }

    handleSuccessfulLogout() {
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN'
        });
    }

    checkLoginStatus() {
        return axios
            .get("http://127.0.0.1:8000/rest-auth/login/", {
                withCredentials: true
            })
            .then(response => {
                const loggedInWithToken = response.data.key;
                // console.log(loggedInWithToken);
                const loggedInStatus = this.state.loggedInStatus;

                if (loggedInWithToken && loggedInStatus === 'LOGGED_IN') {
                    return loggedInWithToken;
                } else if (loggedInWithToken && loggedInStatus === 'NOT_LOGGED_IN') {
                    this.setState({
                        loggedInStatus: 'LOGGED_IN'
                    });
                } else if (!loggedInWithToken && loggedInStatus === 'LOGGED_IN') {
                    this.setState({
                        loggedInStatus: 'NOT_LOGGED_IN'
                    });
                }
            })
            .catch(error => {
                console.log('Error', error);
        });
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

    adminPages() {
        return [
            <Route 
                key='phlog-manager'
                path='/phlog-manager'
                component={PhlogManager}
            />
        ];
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Navigate 
                            loggedInStatus={this.state.loggedInStatus}
                            handleSuccessfulLogout={this.state.handleSuccessfulLogout}
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
                                path='/login'
                                render={props => (
                                    <LoginForm
                                        {...props}
                                        handleSuccessfulLogin={this.handleSuccessfulLogin}
                                        handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                                    />
                                )}
                            />

                            {this.state.loggedInStatus === 'LOGGED_IN'
                                ? this.props.adminPages()
                                : null
                            }

                            <Route exact path='/signup' component={SignUpForm} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

