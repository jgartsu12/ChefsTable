import React, { Component } from 'react';
import axios from 'axios';

import MenuTitle from './menuTitle';
import MenuItem from './menuItem';

export default class MenusContainer extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: true,
            data: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        // handles when card clicked
    };

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