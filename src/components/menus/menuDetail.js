import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import MenuTitle from './menuTitle';

class MenuDetail extends Component {
    state = {
        menuItem: {}
    };

    componentDidMount() {
        const foodID = this.props.match.params.foodID;
        axios
            .get(`http://127.0.0.1:8000/api/${foodID}`)
            .then(res => {
                this.setState({
                    menuItem: res.data
                });
            });
        }
    
    handleDelete = event => {
        event.preventDefault();
        const foodID = this.props.match.params.foodID;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios
            .delete(`http://127.0.0.1:8000/api/${foodID}/delete/`)
            .then(res => {
                if (res.status === 204) {
                    this.props.history.push(`/`);
            }
        })
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
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps)(MenuDetail);