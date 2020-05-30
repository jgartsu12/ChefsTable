import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import axios from 'axios';
// import Header from '../headernavbarfooter/header';
// import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
import LunchFoods from './LunchFoodList';
import MenuTitle from '../headernavbarfooter/menuTitle';

export default class LunchMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lunch: []
        };

        this.getLunches = this.getLunches.bind(this);
    }

    getLunches() {
        axios
            .get('http://127.0.0.1:8000/api/lunch/')
            .then(response => {
                this.setState({
                    lunch: response.data
                });
            })
            .catch(error => {
                console.log('getLunches failed', error);
        });
    }

    lunches() {
        return this.state.lunch.map(item => {
            return <LunchFoods key={item.id} item={item} />
        });
    }

    componentDidMount() {
        this.getLunches();
    }

   render() {
       return (
           <div>
                {/* <Header /> */}
                {/* <Navbar /> */}
                <MenuTitle className='lunch-menu-title' title='Lunch Menu'/>
                <div className='menu'>
                    {this.lunches()}
                </div>
                <SocialMediaFooter/>
           </div>
       );
   }
}
>>>>>>> blog_branch
