import React, { Component } from 'react';
import axios from 'axios';

import MenuTitle from './menuTitle';
import MenuItem from './menuItem';

export default class MenusContainer extends Component {
    constructor() {
        super();

        this.state = {
            showMenuItemFront: true,
            data: []
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({ showMenuItemFront: false });
    }

    handleMouseLeave() {
        this.setState({ showMenuItemFront: true });
    }


    // handleChange() {
    //     // handles when card clicked
    // };

    render() {
        return (
            <div className='menus-wrapper'>
                <div className='menus-header'>
                    <MenuTitle className='breakfast-menu' title='Breakast'/>
                </div>
                <div className='menus-content'>
                    <MenuItem />
                </div>
            </div>
        );
    }
}