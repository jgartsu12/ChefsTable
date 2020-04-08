import React, { Component } from 'react';

import AccountInfoForm from './accountInfoForm';

export default class AccountInfo extends Component {
    onSubmit = fields => {
        console.log(fields)
    }

    render() {
        return (
            <div className='account-info'>
                <div className='account-info__header'>
                    <h1>Account Information</h1>
                </div>

                <AccountInfoForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}