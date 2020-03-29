import React, { Component } from 'react';

export default class MenuTitle extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} menu-title`}>{title}</div>
        );
    }
}