import React, { Component } from 'react';

import LoginForm from '../Auth/loginForm';
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