import React, { Component } from "react";
import axios from "axios";

import Header from '../headernavbarfooter/header';
import Navbar from '../headernavbarfooter/navbar';
import PhlogList from '../phlog/phlog-list';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';

export default class Phlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phlogItem: {}
        };
    }

    componentWillMount() {
        this.getPhlogItem();
    }

    getPhlogItem() {
        axios
            .get(
                etttte,
            )
            .then(response => {
                this.setState({
                    phlogItem: response.data
                });
            })
            .catch(error => {
                console.log('getPhlogItem error', error);
        });
    }

    phlog() {
        return this.state.phlogItem.map(item => {
            return <PhlogList key={item.id} item={item} />
        });
    }

    componentDidMount() {
        this.getPhlogItem();
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div className='phlog'>
                    {this.phlog()}
                </div>
                <SocialMediaFooter/>
            </div>
        );
    }
}