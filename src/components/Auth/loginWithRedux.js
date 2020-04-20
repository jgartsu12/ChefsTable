import React, { Component } from "react";
// import axios from "axios";
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';
import validateInput from '../../helpers/auth/validInput';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            err: {},
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValid() {
        const { err, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ err });
        }

        return isValid;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: ''
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({ err: {}, isLoading: true});
            this.props.getAuth(this.state.username, this.state.password);
        } else {
            let errorMessage = 'Wrong Username or password';
                return errorMessage;
        }
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     // this.props.form.((error, values) => {
    //         if (!error) {
    //             this.props.getAuth(values.username, values.password);
    //             console.log(values);
    //             this.props.handleSucessfulAuth();
    //             // this.props.history.push('/');
    //         } else {
    //             let errorMessage = 'Wrong Username or password'
    //             return errorMessage
    //         }
    //     // })    
    // }

    render() {
        return (
            <div>
                <h1>LOGIN TO EDIT YOUR PHLOG</h1>

                <div>{this.state.errorMessage}</div>

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
        );
    }
}

// const WrappedLoginForm = Form.create()(Login);

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAuth: (username, password) => {
            dispatch(actions.authLogin(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);