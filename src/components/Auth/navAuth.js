import React, { Component } from 'react';
import Login from '../Auth/loginmachIV';

export default class NavAuth extends Component {
    render() {
        let form;
        switch(this.props.displayedForm) {
            case 'login':
                form = <Login
                        handleLoginChange={this.props.handleLoginChange}
                        handleLogin={this.props.handleLogin}
                        username={this.props.username}
                        />
                break;
            case 'signup':
                form = <Signup />
                break;
            default:
                form = null;
        }
    const loggedInIsTrueNav = (
        <ul>
            <li onClick = {() => this.props.displayForm('login')}>Login</li>
            <li onClick = {() => this.props.displayForm('signup')}>Signup</li>
        </ul>
    );

    const loggedInIsFalseNav = (
        <ul>
            <li onClick={this.props.handleLogout}>Logout</li>
        </ul>
    );
    
    return (
            <div>
                {
                    this.props.loggedIn ? loggedInIsFalseNav : loggedInIsTrueNav
                }
                {form}
            </div>
        );
    }
}