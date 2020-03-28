import React, { Component } from 'react';

import Header from '../headernavbarfooter/header' ;
import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';


export default class MainLayout extends Component {
    render() {
        return (
            <div className='main-layout-wrapper'>
                <Header/>
                <Navbar/>
                <SocialMediaFooter/>
            </div>
        );
    }
}