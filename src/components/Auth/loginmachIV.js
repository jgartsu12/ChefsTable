import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            password: ''
        }
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.props.handleLogin(event, {
                    username: this.props.username,
                    password: this.state.password
                })} className="auth-form-wrapper">
                    <div className='form-content'>
                        <input
                            type='username'
                            name='username'
                            placeholder='Enter Your Username'
                            value={this.props.username}
                            onChange={this.props.handleLoginChange}
                        />
                    </div>

                    <div className='form-content'>
                        <i className="fas fa-user-lock"></i> 
                        <input 
                            type='password'
                            name='password'
                            placeholder='Your password'
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>

                    <button className='btn' type='submit'>
                        Login Phlog Manager
                    </button>
                </form>
            </div>
        );
    }
}