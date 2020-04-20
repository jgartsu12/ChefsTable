import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignupForm extends Component {
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
            <form onSubmit={event => this.props.handleSignup(event, this.state)}>
                <h5> Sign Up an Admin</h5>
                <label htmlFor='username'>Username</label>
                <input 
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type='submit'/>
            </form>
        );
    }
}

SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired
};