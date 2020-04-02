import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import MenuTitle from './menuTitle';

export default class SoupDetail extends Component {
    state = {
        soupItem: {}
    };

    componentDidMount() {
        const soupID = this.props.match.params.soupID;
        axios
            .get(`http://127.0.0.1:8000/api/${soupID}`)
            .then(res => {
                this.setState({
                    menuItem: res.data
            });
        });
    }
}