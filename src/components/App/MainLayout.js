import React, { Component } from 'react';

import Header from '../headernavbarfooter/header' ;
import Navbar from '../headernavbarfooter/navbar';
import PageTitle from '../pageTitle';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';

import StoreFrontImage from '../../../static/assets/images/restaurant-bldg-image.jpg';
import RichAndBreadImage from '../../../static/assets/images/rich-bread.jpg';

import HomePageRectangle from '../../helpers/canvas/shapes/rectangles/homepagerect';

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
                                <HomePageRectangle/>
                            </div>
                        </div>
                    </div>
                            {/* About Us page */}
                    <div className='about-us-page-wrapper'>
                        <PageTitle className='about-us-page' title='About Us'/>
                        <div className='about-us-page-content'>
                            <div className='left-column'>
                                <img src={RichAndBreadImage}/>
                            </div>
                            <div className='right-column'>
                                
                            </div>
                        </div>
                    </div>
                            {/* Contact page */}
                            {/* Soup page */}
                            {/* Breakfast page */}
                            {/* Lunch page */}
                            {/* Order Online link to Ecom Site */}

                <SocialMediaFooter/>
            </div>
        );
    }
}