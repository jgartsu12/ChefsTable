import React, { Component } from 'react';
import axios from 'axios';
import Header from '../headernavbarfooter/header';
import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
import LunchFoods from './LunchFoodList';

export default class LunchMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lunches: []
        };

        this.getLunches = this.getLunches.bind(this);
    }

    getLunches() {
        axios
            .get('http://127.0.0.1:8000/api/lunch/')
            .then(response => {
                this.setState({
                    lunches: response.data
                });
            })
            .catch(error => {
                console.log('getLunches failed', error);
        });
    }

    lunches() {
        return this.state.lunches.map(item => {
            return <LunchFoods key={item.id} item={item} />
        });
    }

    componentDidMount() {
        this.getLunches();
    }

   render() {
       return (
           <div>
                <Header />
                <Navbar />
                <div className='lunch-menu-wrapper'>
                    {this.lunches()}
                </div>
                <SocialMediaFooter/>
           </div>
       );
   }
}