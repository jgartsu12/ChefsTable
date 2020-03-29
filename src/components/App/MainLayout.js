import React, { Component } from 'react';

import Header from '../headernavbarfooter/header' ;
import Navbar from '../headernavbarfooter/navbar';
import PageTitle from '../pageTitle';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';

import StoreFrontImage from '../../../static/assets/images/restaurant-bldg-image.jpg';
import RichAndBreadImage from '../../../static/assets/images/rich-bread.jpg';

import HomePageRectangle from '../../helpers/canvas/shapes/rectangles/homepagerect';
import ParagraphContainer from '../../helpers/textareaContainers/paragraphsContainer'


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
                                <ParagraphContainer/>
                            </div>
                        </div>
                    </div>
                            {/* Contact page */}
                    <div className='contact-page-wrapper'>
                        <PageTitle className='contact-page' title='Contact Us'/>
                        <div className='contact-page-content'>
                            <div className='centered-column'>
                                <ParagraphContainer/>
                            </div>
                        </div>
                    </div>
                            {/* Soup page */}
                    <div className='soup-page-wrapper'>
                        <PageTitle className='soup-page' title='Daily Soups'/>
                        <div className='soup-page-content'>
                            <div className='centered-column'>
                                <div className='soup-menu'>
                                    <div className='soup-menu-item'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            {/* Breakfast page */}
                    <div className='breakfast-page-wrapper'>
                        <PageTitle className='breakfast-page' title='Breakfast Menu'/>
                        <div className='breakfast-page-content'>
                            <div className='centered-column'>
                                <div className='breakfast-menu'>
                                    <div className=''></div>
                                </div>
                            </div>
                        </div>
                    </div>
                            {/* Lunch page */}
                    <div className='lunch-page-wrapper'>
                        <PageTitle className='lunch-page' title='Lunch Menu'/>
                        <div className='contact-page-content'>
                            {/* content */}
                        </div>
                    </div>
                            {/* Order Online link to Ecom Site */}

                <SocialMediaFooter/>
            </div>
        );
    }
}