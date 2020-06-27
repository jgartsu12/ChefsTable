import React, { Component } from "react";

class SocialMediaFooter extends Component {
    
    render() {
        return (
            <div className='social-media-footer-wrapper'>
                <div className='social-media-icon'>
                    <a href="https://www.facebook.com/chefstablect/">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </div>
                <div className='social-media-icon'>
                    <a href="https://twitter.com/ChefsTableCT">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
                <div className='social-media-icon'>
                    <a href="https://www.instagram.com/chefstablect/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default SocialMediaFooter;