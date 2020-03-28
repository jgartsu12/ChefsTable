import React, { Component } from 'react';

export default class extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} page-title`}>{title}</div>
        );
    }
}