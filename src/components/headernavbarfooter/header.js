import React, { Component } from "react";

import HeaderBannerImage from '../../../static/assets/images/chefs_home_page_banner.png'

export default class Header extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <div 
                    className='header-banner-image'
                    style={{
                        backgroundImage: `url(${HeaderBannerImage})`
                    }}
                />
            </div>
        );
    }
}     