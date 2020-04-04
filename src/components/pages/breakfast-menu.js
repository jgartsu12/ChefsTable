import React, { Component } from 'react';
import axios from 'axios';
import Header from '../headernavbarfooter/header';
import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
import BreakfastFoods from './BreakfastFoodList';

export default class BreakfastMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breakfastFood: []
        };

        this.getBreakfastFood = this.getBreakfastFood.bind(this);
    }

    getBreakfastFood() {
        axios
            .get('http://127.0.0.1:8000/api/breakfast/')
            .then(response => {
                this.setState({
                    breakfastFood: response.data
                });
            })
            .catch(error => {
                console.log('getBreakfastFood failed', error);
        });
    }

    breakfastFoods() {
        return this.state.breakfastFoods.map(item => {
            return <BreakfastFoods key={item.id} item={item} />
        });
    }

    componentDidMount() {
        this.getBreakfastFood();
    }

   render() {
       return (
           <div>
                <Header />
                <Navbar />
                <div className='breakfast-menu-wrapper'>
                    {this.breakfastFoods()}
                </div>
                <SocialMediaFooter/>
           </div>
       );
   }
}