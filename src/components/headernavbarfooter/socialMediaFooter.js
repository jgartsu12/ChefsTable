import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from '../../helpers/icons';


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