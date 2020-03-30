import React, { Component } from 'react';
import axios from 'axios';

import MenuTitle from './menuTitle';

export default class MenuDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItem: {}
        };
    }

    componentWillMount() {
        this.getMenuItem();
    }

    getMenuItem() {
        axios
            .get(
                `http://127.0.0.1:8000/api/<pk>/${
                    this.props.match.params.slug
            }`,
            // { withCredentials: true }
            )
            .then(response => {
                this.setState({
                    menuItem: response.data.menu_items
                });
            })
            .catch(error => {
                console.log('getMenuItem error', error);
            });
        }
    render() {
        const {
            titles,
            menu_items, 
            menu_items_description,
            soup_prices,
            all_food_but_soups_prices
        } = this.state.menuItem;
        
        return (
            <div className='menu-detail-wrapper'>
                <div className='menu-header'>
                    <MenuTitle className='soups-menu' title={titles}/>
                    <div className='subtitle'>{menu_items_description}</div>
                </div>
                <div className='menu-content'>
                    
                </div>
            </div>
        )
    }
}