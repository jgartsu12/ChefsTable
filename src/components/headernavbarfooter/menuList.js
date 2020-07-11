import React, { Component } from 'react';
import axios from 'axios';

import MenusContainer from './menusContainer';

class MenuList extends Component {
    state = {
        menuItems: []
    };

    fetchMenuItems = () => {
        axios 
            .get('http://jgartsu12.pythonanywhere.com/api/')
            .then(res => {
                this.setState({
                    menuItems: res.data
            });
        });
    }

    componentDidMount() {
        this.fetchMenuItems();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.fetchMenuItems();
        }
    }

    render() {
        return (
            <div>
                <MenusContainer data = {this.state.menuItems}/>
            </div>
        )
    }
}

export default MenuList;