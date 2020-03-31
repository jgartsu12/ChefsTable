import React, { Component } from 'react';
import axios from 'axios';


import MenuTitle from './menuTitle';
// import MenuItem from './menuItem';

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

    // getMenuItemImage()

    // handleChange() {
    //     // handles when card clicked
    // };

    render() {
        return (
            <div className='menu-content-wrapper'>
                <div className='menu-header'>
                    <MenuTitle className='breakfast-menu' title='Breakast'/>
                </div>
                <div className='menu-item'>
                    <div className='menu-item__front'>

                    </div>
                </div>
            </div>
        );
    }
}