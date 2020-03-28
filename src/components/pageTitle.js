import React, { Component } from 'react';

export default class PageTitle extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} page-title`}>{title}</div>
        );
    }
}