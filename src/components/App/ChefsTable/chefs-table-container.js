import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../headernavbarfooter/header';

export default class ChefsTableContainer extends Component {
    render() {
        return (
            <div className='homepage-wrapper'>
                <Header />
            </div>
        );
    }
}