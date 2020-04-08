import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

class Purchases extends Component {
    componentDidMount() {
        this.props.fetchUserPurchases();
    }

    render() {
        return (
            <div className='purchases'>
                {
                    this.props.purchases.map(purchases => {
                        return (
                            <a onClick={() => this.props.setPurchaseDetails(purchase.id)} key={purchase.id} class
                        )
                    })
                }
            </div>
        )
    }
}