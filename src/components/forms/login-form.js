import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as actions from '../../store/actions/auth';


const FormItem = Form.Item;

export default class AdminLoginForm extends Component {
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

        return (
            <div className='login-form'>
                {errMsg}
                {
                    this.props.isLoading ?
                    <Spin indicator={antIcon} />

                    :
                
                    <Form
                        className='login-form'
                        initialValues={{
                            remember: true,
                        }}
                        onSubmit={this.handleSubmit}
                    >
                        <FormItem
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </FormItem>
        
                        <FormItem
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </FormItem>
                        
                        <FormItem>
                            <FormItem name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </FormItem>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </FormItem>

                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            Or 
                            <NavLink to='/signup/'>sign up a phlogger</NavLink>
                        </FormItem>
                    </Form>
                }
            </div>
        );
    }
}

const ContainedAdminLoginForm = Form.create()(AdminLoginForm);

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainedAdminLoginForm);

// handleFormSubmit = async(event, requestType, id) => {
//         event.preventDefault();

//         const postPhlog = {
//             phlog_title: event.target.elements.phlog_title.value,
//             phlog_description: event.target.element.phlog_description.value,
//             phlog_status: event.target.element.phlog_status.value,
//             phlog_image_url: event.target.element.phlog_image_url.value
//         }

//         axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//         axios.defaults.xsrfCookieName = "csrftoken";
//         axios.defaults.headers = {
//             "Content-Type": "application/json",
//             Authorization: `Token ${this.props.token}`,
//         };

//         if (requestType === 'post') {
//             await axios.post('http://127.0.0.1:8000/phlogapi/phlog/create', postPhlog)
//                 .then(res => {
//                     if (res.status === 201) {
//                         this.props.history.push('/');
//                     }
//                 })
//         } else if (requestType === 'put') {
//             await axios.put(`http://127.0.0.1:8000/phlogapi/phlog/${id}/update`, postPhlog)
//                 .then(res => {
//                     if(res.status === 200) {
//                         this.props.history.push(`/`);
//                     }
//                 })
//             }
//         };