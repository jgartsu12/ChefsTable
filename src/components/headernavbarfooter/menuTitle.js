import React, { Component } from 'react';

class MenuTitle extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} menu-title`}>{title}</div>
        )
    }
}

export default MenuTitle;