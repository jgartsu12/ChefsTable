import React, { Component } from 'react';
import axios from 'axios';

import Header from '../headernavbarfooter/header';
// import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
import Soups from './SoupListItems';
import MenuTitle from '../headernavbarfooter/menuTitle';

export default class Soup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            soups: []
        };

        this.getSoups = this.getSoups.bind(this);
    }

    getSoups() {
        axios
            .get('http://127.0.0.1:8000/api/soups/')
            .then(response => {
                this.setState({
                    soups: response.data
                });
            })
            .catch(error => {
                console.log('getSoups failed', error);
        });
    }

    soups() {
        return this.state.soups.map(item => {
            return <Soups key={item.id} item={item} />
        });
    }

    componentDidMount() {
        this.getSoups();
    }

   render() {
       return (
           <div>
                <Header />
                {/* <Navbar /> */}
                <MenuTitle className='soup-menu-title' title='Soups Menu'/>
                <div className='menu'>
                    {this.soups()}
                </div>
                <SocialMediaFooter/>
           </div>
       );
   }
}