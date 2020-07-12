import React, { Component } from 'react';
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
            .get('https://jgartsu12.pythonanywhere.com/api/lunch/')
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
