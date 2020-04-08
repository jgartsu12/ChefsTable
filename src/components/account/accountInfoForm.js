import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { Input, Button } from '../formFields';
import history from '../../history';

class AccountInfoForm extends Component {

    constructor() {
        super();

        this.state = {
            showPasswords: false
        };
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='account-info-form'>
                <Field classname='account-info-form__name'
                type='name'
                placeholder='Name'
                component={Input}
                />

                <Field className='account-info-form__username'
                type='username'
                placeholder='username'
                component={Input}
                />

                <Field className='account-info-form__email'
                type='email'
                placeholder='E-mail'
                component={Input}
                />

                <Field className='account-info-form__street-address'
                type='address'
                placeholder='Street Address'
                component={Input}
                />

                <Field className='account-info-form__city'
                type='city'
                placeholder='City'
                component={Input}
                />

                <Field className='account-info-form__state'
                type='state'
                placeholder='State'
                component={Input}
                />

                <Field className='account-info-form__zipcode'
                type='zipcode'
                placeholder='Zipcode'
                component={Input}
                />

                {
                    this.state.showPasswords ?
                        [
                            <Field key={0} className='account-information-form__current-pword'
                            type='password'
                            placeholder='Current Password'
                            component={Input}
                            />,

                            <Field key={1} className='account-information-form__new-pword'
                            type='password'
                            placeholder='New Password'
                            component={Input}
                            />, 

                            <Field key={2} className='account-information-form__confirm-pword'
                            type='password'
                            placeholder='Confirm Password'
                            component={Input}
                            />, 

                            <Field key={3} className='account-information-form__update-info'
                            onClick={() => this.setState({ showPasswords: false })}
                            type='submit'
                            title='Update Information'
                            component={Button}
                            />,

                            <Field key={4} className='account-information-form__update-info'
                            onClick={() => this.setState({ showPasswords: false })}
                            type='button'
                            title='Cancel'
                            component={Button}
                            />
                        ]
                    :
                            <Field className='account-information-form__change-password'
                            onClick={() => this.setState({ showPasswords: false })}
                            type='button'
                            title='Password'
                            component={Button}
                            />
                }
            </form>
        );
    }
}

AccountInfoForm = reduxForm({
    form: 'AccountInfoForm'
})(AccountInfoForm);

export default AccountInfoForm;
