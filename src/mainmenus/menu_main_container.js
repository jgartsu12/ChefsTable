import React, { Component } from 'react';
import axios from 'axios';
// import Header from '../components/headernavbarfooter/header';
// import Navbar from '../components/headernavbarfooter/navbar';
// import SocialMediaFooter from '../components/headernavbarfooter/socialMediaFooter';
import Soups from './soups-edited';

export default class MenuContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.getSoups = this.getSoups.bind(this);
    }

    getSoups() {
        axios
            .get('http://127.0.0.1:8000/api/soups/')
            .then(response => {
                console.log('soup response data', response);
                this.setState({
                    data: response.data.soups
                });
            })
            .catch(error => {
                console.log('getSoups failed', error);
        });
    }

    soups() {
        this.state.data.map(soups => {
            return <Soups key={soups.id} title={soups.title} name={soups.name} description={soups.description} front_thumb_img_url={soups.front_thumb_img_url} />
        });
    }

    componentDidMount() {
        this.getSoups();
    }

    render() {
        return (
            <div>
                {this.soups()}
            </div>
        );
    }
}