import React, { Component } from 'react';

import Header from '../headernavbarfooter';
import Navbar from '../headernavbarfooter/navbar';

export default class MainLayout extends Component {
    render() {
        return (
            <div className='main-layout-wrapper'>
                <Header/>
                <Navbar/>
            </div>
        );
    }
}