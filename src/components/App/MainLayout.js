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
            <div>
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
                    <div className='about-us-page-content-wrapper'>
                        <div className='left-column'>
                            <img src={RichAndBreadImage}/>
                        </div>
                        <div className='right-column'>
                            <ParagraphContainer header='Welcome to The Chefs Table, an ever evolving melting pot of food, music, and art.' 
                                                text = 'The Chefs Table began as a small gourmet take out operation in 1995. Started by Culinary Institute of America grad Richard Herzfeld, It has grown, evolved, and merged into what has become one of Fairfield Counties premier eatery and rock and roll outlets. Boasting 10 hot soups a day, a tossed salad bar, a gourmet salad bar, a panini bar, and a coffee bar, as well as live music during lunch and dinner 7 days a week, and walls adorned with rock and roll art and vinyl records.
                                                        The Chefs Table will certainly enlighten your senses and help you forget your worries. We cordially invite you to join us, 7 days a week, into a place that is as laid back as it appears. You never know who just might show up...'
                            />
                        </div>
                    </div>

                    {/* Display interactive menus through pages */}
                            {/* Soup page */}
                    <div className='soup-page-wrapper'>
                        {/* <PageTitle className='soup-page' title='Daily Soups'/> */}
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
                        {/* <PageTitle className='breakfast-page' title='Breakfast Menu'/> */}
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
                        {/* <PageTitle className='lunch-page' title='Lunch Menu'/> */}
                        <div className='contact-page-content'>
                            {/* content */}
                        </div>
                    </div>

            {/* Order Online link to Ecom Site future feature */}

                <SocialMediaFooter/>
            </div>
        );
    }
}