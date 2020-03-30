import React, { Component } from 'react';

export default class HomeParagraphContainer extends Component {
    render() {
        const { header, text, location, hours, subtext, phoneNumber } = this.props;
        return (
            <div className='home-paragraph-container'>
                <div className='home-paragraph-header'>{header}</div>
                <div className='home-paragraph-text'>{text}</div>
                <div className='home-paragraph-location'>{location}</div>
                <div className='home-paragraph-subtext'>{subtext}</div>
                <div className='home-paragraph-hours'>{hours}</div>
                <div className='home-paragraph-phone'>{phoneNumber}</div>
            </div>
        );
    }
}

