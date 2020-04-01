import React, { Component } from 'react';
import axios from 'axios';

import MenuItems from './menuItems;'

export default class MenusContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
    }

    getMenuItems() {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    data: response.data
            })
            .catch(error => {
                console.log('getMenuItems failed error', error);
            })
        })
    }
    
    menuItems() {
        return this.state.data.map(item => {
            return <MenuItems key={item.foodID} item={item} />
        }); 
    }

    componentDidMount() {
        this.getMenuItems();
    }

    render() {
        return (
            <div className='menu-items-wrapper'>
                {this.menuItems()}
            </div>
        );
    }
}