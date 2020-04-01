import React from 'react';

import StoreFrontImage from '../../../static/assets/images/restaurant-bldg-image.jpg';
import HomeParagraphContainer from '../../helpers/textareaContainers/homeParagraphContainer';


export default function() {
    return (
        <div>
            <div className='home-page-content-wrapper'>
                <div className='left-column'>
                    <img src={StoreFrontImage}/>
                </div>
                <div className='right-column'>
                    <HomeParagraphContainer header='Location & Hours'
                                        text =  'We are located at:'
                                        location = '1138 Post Rd, Fairfield, CT'
                                        subtext = 'We are open:'
                                        hours='Monday thru Saturday 7AM to 9PM . . . Sunday 7AM-8PM'
                                        phoneNumber='(203)-255-1779'
                    />
                </div>
            </div>
        </div>
    );
}