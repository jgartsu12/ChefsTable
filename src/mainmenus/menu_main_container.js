import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/headernavbarfooter/header';
import Navbar from '../components/headernavbarfooter/navbar';
import SocialMediaFooter from '../components/headernavbarfooter/socialMediaFooter';
import Soups from '../components/util/soup-api';

export default class MenuContainer extends Component {
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
                <Navbar />
                <div className='soup-menu-wrapper'>
                    {this.soups()}
                </div>
                <SocialMediaFooter/>
           </div>
       );
   }
}