import React, { Component } from 'react';

import Header from '../headernavbarfooter/header';
// import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';

import RichAndBreadImage from '../../../static/assets/images/rich-bread.jpg';
import AboutParagraphContainer from '../../helpers/textareaContainers/aboutParagraphContainer';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
            <Header />
            {/* <Navbar /> */}
                <div className='about-us-page-content-wrapper'>
                    <div className='left-column'>
                        <img src={RichAndBreadImage}/>
                    </div>
                    <div className='right-column'>
                        <AboutParagraphContainer header='Welcome to The Chefs Table, an ever evolving melting pot of food, music, and art.' 
                                                 text = 'The Chefs Table began as a small gourmet take out operation in 1995. Started by Culinary Institute of America grad Richard Herzfeld, It has grown, evolved, and merged into what has become one of Fairfield Counties premier eatery and rock and roll outlets. Boasting 10 hot soups a day, a tossed salad bar, a gourmet salad bar, a panini bar, and a coffee bar, as well as live music during lunch and dinner 7 days a week, and walls adorned with rock and roll art and vinyl records.
                                                    The Chefs Table will certainly enlighten your senses and help you forget your worries. We cordially invite you to join us, 7 days a week, into a place that is as laid back as it appears. You never know who just might show up...'
                        />
                    </div>
                </div>
            <SocialMediaFooter/>
            </div>
        );
    }
}