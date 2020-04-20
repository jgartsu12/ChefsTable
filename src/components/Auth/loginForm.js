import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(oldstate => {
            const currentState = { ...oldstate };
            currentState[name] = value;
            return currentState;
        });
    };

    render() {
        return (
            <form onSubmit={event => this.props.handleLogin(event, this.state)} className='auth-form-wrapper'>
                <h5>Log In Phlogger</h5>
                <div className='form-content'>
                    <input 
                        type='username'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                
                <div className='form-content'>
                    <i className='fas fa-user-lock'></i>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <input type='submit'/>
            </form>
        );
    }
}

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
};