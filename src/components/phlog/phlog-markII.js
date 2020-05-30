import React, { Component } from "react";
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'

import Header from '../headernavbarfooter/header';
// import Navbar from '../headernavbarfooter/navbar';
// import PhlogList from '../phlog/phlog-list';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';

export default class Phlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phlog: []
        };
    };

    componentDidMount() {
        axios.get('https://api.cloudinary.com/v1_1/chefstable/image/list/phlog.json')
            .then(res => {
                console.log(res.data.resources);
                console.log(state);
                this.setState({
                    phlog: res.data.resources
                });
            }
        );
    };

    
    render() {
        return (
            <div>
                <Header />
                {/* <Navbar /> */}
                <div className='phlog-wrapper'>
                    <h1>Our Photo Blog... The Phlog</h1>
                    <CloudinaryContext cloudName='chefstable'>
                        {
                            this.state.phlog.map(data => {
                                return (
                                    <div className='responsive' key={data.public_id}>
                                        <div className='img'>
                                            <a target='_blank' href={`https://api.cloudinary.com/v1_1/chefstable/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop='scale'
                                                        width='300'
                                                        height='200'
                                                        dpr='auto'
                                                        responsive_placeholder='blank'
                                                    />
                                                </Image>
                                            </a>
                                            <div className='desc'>Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className='clearfix'></div>
                </div>
                <SocialMediaFooter/>
            </div>
        );
    }
}