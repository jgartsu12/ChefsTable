import React, { Component } from 'react';

// import Header from '../headernavbarfooter/header';
// import Nav from '../Auth/NavMachXX';
import LoginForm from '../Auth/loginMachXXX';
// import SignupForm from '../Auth/SignupFormMachX';
import LoginBackGroundImg from '../../../static/assets/images/table-background-image.jpg'

export default class Auth extends Component {

    render() {
        return (
            <div className='auth-wrapper'>
                <div 
                    className='auth-background-img'
                    style={{
                        backgroundImage: `url(${LoginBackGroundImg})`
                    }}
                />

                <div className='center-column'>
                    <LoginForm
                        handleLogin={this.props.handleLogin}
                    />
                </div>
            </div>   
        );
    }
}