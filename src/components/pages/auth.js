import React, { Component } from 'react';

// import LoginForm from '../Auth/login-form';
// import Login from '../Auth/login-use';
// import Login from '../Auth/loginWithRedux';
import Login from '../Auth/loginMach3';
import LoginBackGroundImg from '../../../static/assets/images/table-background-image.jpg';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
      }
    
      handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
      }

    render() {
        return (
            <div className='auth-page'>
                <div 
                    className='auth-background-img'
                    style={{
                        backgroundImage: `url(${LoginBackGroundImg})`
                    }}
                />
                <div className='center-column'>
                    <Login
                       
                    />
                </div>
            </div>
        );
    }
}

