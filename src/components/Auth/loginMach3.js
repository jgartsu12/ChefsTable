import React, { Component } from 'react';
import axiosInstance from '../../helpers/auth/axiosHelper';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('/rest-auth/login/', { 
                username: this.state.username,
                password: this.state.password
            });
            axiosInstance.defaults.headers['Authorization'] = 'Token ' + res.data.key;
            localStorage.setItem('token', response.data.key);
            this.props.handleSuccessfulAuth();
            return res;
        } catch (err) {
            this.props.handleUnsuccessfulAuth();
            throw err;
        }
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO EDIT YOUR PHLOG</h1>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className='form-content'>
                        <input
                            type='username'
                            name='username'
                            placeholder='Enter Your Username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='form-content'>
                        <i className="fas fa-user-lock"></i> 
                        <input 
                            type='password'
                            name='password'
                            placeholder='Your password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button className='btn' type='submit'>
                        Login Phlog Manager
                    </button>
                </form>
            </div>
        )
    }
}