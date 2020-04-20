import React, { Component } from "react";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: ''
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.defaults.headers.common["Authorization"] = `Token ${this.props.token}`;
        axios.defaults.headers.post["Content-Type"] = "application/json";
        // axios.defaults.headers = {
        //     "Content-Type": "application/json",
        //     Authorization: `Token ${this.props.token}`
        // };
        axios
          .post(
              'http://127.0.0.1:8000/rest-auth/login/',
              {
                    username: this.state.username,
                    password: this.state.password
              },
            //   { withCredentials: true }
              { isAuthenticated: true }
          )
              .then(response => {
                  const token = response.data.key;
                  if (localStorage.setItem(token, 'token')) {
                      console.log(token);
                      this.props.handleSucessfulAuth();
                  } else {
                      this.setState({
                          errorMessage: 'Wrong username or password'
                      });
                      this.props.handleUnsuccessfulAuth();
                    //   console.log(token);
                  }
                  
              })
        //   .then(res => {
        //     if (this.props.token === res.data.key) {
        //         // console.log(res)
        //         this.props.handleSuccessfulAuth();
        //         // debugger;
        //     } else {
        //         this.setState({
        //             errorMessage: 'Wrong username or password'
        //         });
        //         this.props.handleUnsuccessfulAuth();
        //     }
        //   })
           .catch(error => {
               this.setState({
                   errorMessage: 'Authorization error occured',
                   error
               })
               this.props.handleUnsuccessfulAuth();
        });

    }

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