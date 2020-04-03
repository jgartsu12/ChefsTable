import React, { Component } from 'react';
import axios from 'axios';
// import MenuContainer from './menu_main_container';

export default class SoupMenu extends Component {
    

    render() {
        return (
            <div className='soup-menu'>
                {this.props.value}
            </div>
        );
    }
}