import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions'
import MenuItems from '../menus/menuItems';

class LunchMenu extends Component {
    
    componentDidMount() {
        this.props.fetchMenuItems();
    }


    renderLunchMenu() {
        let lunchItems;
        // if lunchItems === on LUnch menu title from django
        // return an array of object lunches
    }

    renderMenuItems = function() {
        const menuItems = this.props.menuItems.map((menuItem, index) => {
            if(index < 10) {
                return (
                    <MenuItems {...menuItem} key={index}/>
                )
            }
        })
        return menuItems;
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
       LunchMenu: state.menuItems.LunchMenu
    }
}

export default connect(mapStateToProps, actions)(LunchMenu);