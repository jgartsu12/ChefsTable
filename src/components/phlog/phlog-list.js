import React, { Component } from 'react';

export default class PhlogList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { id, phlog_image_url, phlog_status } = this.props.item;
        return (
            <div className='phlog-items'>
                <div 
                    className='phlog-items__display-to-site-unAuth-user'
                    >
                       <img
                            className='phlog-items__photos'
                            src={phlog_image_url}
                        />
                </div>
            </div>
        );
    }
}