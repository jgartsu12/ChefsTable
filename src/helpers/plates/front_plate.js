import React, { Component } from 'react';

import PlateImage from '../../../static/assets/images/plate.jpg';

export default class FrontPlate extends Component {
    render() {
        return (
            <div className='menu-img'>
                <img src={PlateImage}/>
            </div>
        );
    }       
};