import React, { Component } from 'react';
import axios from 'axios';

import MenusContainer from '../menus/menusContainer';
import MenuTitle from '../menus/menuTitle';

export default class BreakfastMenu extends Component {
    constructor() {
        super();

        this.state = {
            menuItems: []
        };
    }

    getMenuItems() {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    menuItems: [...res.data]
                });
            })
            .catch(error => {
                console.log('breakfast-menu error in getMenuItems', error);
        });
    }

    componentDidMount() {
        this.getMenuItems();
    }
    render() {
        return (
            <div className='breakfast-menu-wrapper'>
                <div className='breakfast-menu-header'>
                    <MenuTitle className="breakfast-menu__menu-title" title='Breakfast Menu'/>
                </div>
                <div className='breakfaast-menu-content'>
                    <MenusContainer/>
                </div>
            </div>
        );
    }
}