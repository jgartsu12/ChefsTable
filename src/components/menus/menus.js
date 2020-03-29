import React, { Component } from 'react';

import MenuTitle from './menuTitle';
import MenuItem from './menuItem'

export default class Menus extends Component {
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