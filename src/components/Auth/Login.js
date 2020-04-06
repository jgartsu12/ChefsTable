import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core';


import * as actions from '../../store/actions/auth';

export default class AdminPhloggerForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAuth(values.userName, values.password);
                this.props.history.push('/');
            }
        });
    }

    render() {
        let errMsg = null;
        if (this.props.error) {
            errMsg = (
                <p>{this.props.error.message}</p>
            );
        }

        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {errMsg}
                {
                    this.props.isLoading ?
                    
                    <FontAwesomeIcon icon='spinner' spin />

                    :

                    <form onSubmit={this.handleSubmit} className='login-form'>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Enter Your UserName' }],
                        })(
                            <input prefix={
                                <FontAwesomeIcon 
                                    icon='user'
                                    style={{
                                        color: '#000'
                                    }}
                                />}
                                    placeholder='Username'
                            />
                        )}
                    </form>
                }
            </div>
        )
    }
}