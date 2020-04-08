import React, { Component } from 'react';

import LoginForm from '../Auth/login-form';
import LoginBackGroundImg from '../../../static/assets/images/table-background-image.jpg';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleAuthSuccessful = this.handleAuthSuccessful.bind(this);
        this.handleAuthUnSuccessful = this.handeAuthUnSuccessful.bind(this);
    }

    handleAuthSuccessful() {
        this.props.handleLoginSuccess();
        this.props.history.push('/');
    } 

    handleAuthUnSuccessful() {
        this.props.handleLoginNoSuccess();
    }

    render() {
        return (
            <div className='auth-page'>
                <div 
                    className='center-column'
                    style={{
                        backgroundImage: `url(${LoginBackGroundImg})`
                    }}
                />
                <div className='center-column'>
                    <LoginForm
                        handleAuthSuccessful={this.handleAuthSuccessful}
                        handleAuthUnSuccessful={this.handleAuthUnSuccessful}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loading: state.auth.loading,
      error: state.auth.error,
      token: state.auth.token
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
      login: (username, password) => dispatch(authLogin(username, password))
    };
  };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth);