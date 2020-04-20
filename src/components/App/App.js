import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axiosInstance from "../../helpers/auth/axiosHelper";

// import * as actions from '../../store/actions/auth';
// import history from '../../history';
import Navigate from '../headernavbarfooter/navigation';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import SoupMenu from '../pages/soup-menu';
import BreakfastMenu from '../pages/breakfast-menu';
import LunchMenu from '../pages/lunch-menu';
import Phlog from '../pages/phlog';
import PhlogManager from '../pages/phlog-manager';
import Auth from '../pages/auth';
// import LoginForm from '../Auth/login-form';
// import SignUpForm from '../Auth/signup-form';
// import AdminRoute from '../Auth/AdminRoute';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: username,
            password: password,
            loggedInStatus: 'NOT_LOGGED_IN',
            loggedIn: localStorage.getItem('token') ? true : false
        };

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);

        this.handleLogout = this.handleLogout.bind(this);
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

    async handleLogout() {
        try {
            const response = await axiosInstance.post('/rest-auth/logout/', {
                'token': localStorage.getItem('token')
            });
            localStorage.removeItem('token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch(err) {
            console.log('handleLogout error', err);
        }
    };

    checkLoginStatus() {
        if (this.state.)
    }

    // checkLoginStatus() {
    //     event.preventDefault();
    //     axiosInstance.post('/rest-auth/login/', {
    //         username: this.state.username,
    //         password: this.state.password
    //     }).then(response => {
    //         const token = axiosInstance.headers['Authorization'] = 'Token ' + response.data.key;
    //         console.log(token);
    //         const loggedInStatus = this.state.loggedInStatus;
    //         if (token && loggedInStatus === 'LOGGED_IN') {
    //             return token;
    //         } else if (token && loggedInStatus === 'NOT_LOGGED_IN') {
    //             this.setState({
    //                 loggedInStatus: 'LOGGED_IN'
    //             });
    //         } else if (!token && loggedInStatus === 'LOGGED_IN') {
    //             this.setState({
    //                 loggedInStatus: 'NOT_LOGGED_IN'
    //             });
    //         }
    //         })
    //         .catch(error => {
    //             console.log('Error with checkLoginStatus', error);
    //     });
    // }
    

    // checkLoginStatus() {
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
    //     axios.defaults.headers.post["Content-Type"] = "application/json";
    //     // event.preventDefault();
    //     // axios.defaults.headers = {
    //     //     "Content-Type": "application/json",
    //     //     Authorization: `Token ${this.props.token}`
    //     // }
    //     return axios
    //         .post("http://127.0.0.1:8000/rest-auth/login/"
    //             // , { withCredentials: true}
    //         , {isAuthenticated: true}
    //         )
    //         .then(response => {
    //             const token = response.data.key;
            
    //             // console.log(loggedInWithToken);
    //             const loggedInStatus = this.state.loggedInStatus;

    //             if (token && loggedInStatus === 'LOGGED_IN') {
    //                 return token;
    //             } else if (token && loggedInStatus === 'NOT_LOGGED_IN') {
    //                 this.setState({
    //                     loggedInStatus: 'LOGGED_IN'
    //                 });
    //             } else if (!token && loggedInStatus === 'LOGGED_IN') {
    //                 this.setState({
    //                     loggedInStatus: 'NOT_LOGGED_IN'
    //                 });
    //             }
    //         })
    //         .catch(error => {
    //             console.log('Error', error);
    //     });
    // }

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
                            handleLogout={this.state.handleLogout}
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
                                render={props => (
                                    <Auth
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

                            {/* <Route exact path='/signup' component={SignUpForm} /> */}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

