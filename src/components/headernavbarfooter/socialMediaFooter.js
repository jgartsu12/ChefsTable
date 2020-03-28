import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitterSquare, faFacebookSquare, faInstagramSquare);

class SocialMediaFooter extends Component {
    
    render() {
        return (
            <div className='social-media-footer-wrapper'>
                <div className='social-media-icon'>
                    <FontAwesomeIcon icon='twitter-square'/>
                </div>
                <div className='social-media-icon'>
                    <FontAwesomeIcon icon='facebook-square'/>
                </div>
                <div className='social-media-icon'>
                    <FontAwesomeIcon icon='instagram-square'/>
                </div>
            </div>
        );
    }
}

export default SocialMediaFooter;