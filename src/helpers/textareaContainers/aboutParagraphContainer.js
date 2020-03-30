import React, { Component } from 'react';

export default class AboutParagraphContainer extends Component {
    render() {
        const { header, text } = this.props;
        return (
            <div className='about-paragraph-container'>
                <div className='about-paragraph-header'>{header}</div>
                <div className='about-paragraph-text'>{text}</div>
            </div>
        );
    }
}