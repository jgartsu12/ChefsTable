import React, { Component } from 'react';
import axios from 'axios';

export default class Soups extends Component {
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
                data: response.data.soups.map(soup => ({
                    id: soup.id,
                    name: soup.name,
                    description: soup.description,
                })
                )
            });
         }
    }