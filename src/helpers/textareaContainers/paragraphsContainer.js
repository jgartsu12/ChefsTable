import React, { Component } from 'react';

export default class ParagraphContainer extends Component {
    render() {
        const { header, text } = this.props;
        return (
            <div className='paragraph-container'>
                {/* <div className='center-column'/> */}
                <div className='paragraph-header'>{header}</div>
                <div className='paragraph-text'>{text}</div>
            </div>
        );
    }
}