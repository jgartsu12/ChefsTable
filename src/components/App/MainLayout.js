import React, { Component } from 'react';

import Header from '../headernavbarfooter/header' ;
import Navbar from '../headernavbarfooter/navbar';
import PageTitle from '../pageTitle';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';


export default class MainLayout extends Component {
    render() {
        return (
            <div className='main-layout-wrapper'>
                <Header/>
                <Navbar/>
                    <div className='homepage-wrapper'>
                        <PageTitle className='home-page' title='Welcome!'/>
                    </div>
                <SocialMediaFooter/>
            </div>
        );
    }
}