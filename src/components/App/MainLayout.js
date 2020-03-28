import React, { Component } from 'react';

import Header from '../headernavbarfooter/header' ;
import Navbar from '../headernavbarfooter/navbar';
import PageTitle from '../pageTitle';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';

import StoreFrontImage from '../../../static/assets/images/restaurant-bldg-image.jpg';

export default class MainLayout extends Component {
    render() {
        return (
            <div className='main-layout-wrapper'>
                <Header/>
                <Navbar/>
                            {/* home page */}
                    <div className='homepage-wrapper'>
                        <PageTitle className='home-page' title='Welcome!'/>
                        <div className='home-page-content'>
                            <div className='left-column'>
                                <img src={StoreFrontImage}/>
                            </div>
                            <div className='right-column'>
                
                            </div>
                        </div>
                    </div>
                            {/* About Us page */}
                    <div className='about-us-page-wrapper'>
                        <PageTitle className='about-us-page' title='About Us'/>
                        <div className='about-us-page-content'>
                            {/* add rich bread img */}
                        </div>
                    </div>
                <SocialMediaFooter/>
            </div>
        );
    }
}