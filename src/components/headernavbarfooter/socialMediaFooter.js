import React, { Component } from "react";

class SocialMediaFooter extends Component {
    
    render() {
        return (
            <div className='social-media-footer-wrapper'>
                <div className='social-media-icon'>
                    <i className="fab fa-facebook-square"></i>
                </div>
                <div className='social-media-icon'>
                    <i className="fab fa-twitter-square"></i>
                </div>
                <div className='social-media-icon'>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        );
    }
}

export default SocialMediaFooter;