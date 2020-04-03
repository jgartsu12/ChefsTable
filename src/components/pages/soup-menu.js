import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Header from '../headernavbarfooter/header';
import Navbar from '../headernavbarfooter/navbar';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
import MenuTitle from '../menus/menuTitle';
import Soups from '../menus/soups';

class SoupMenu extends Component {
    constructor() {
        super();

        this.state = {
            soups: {}
        }
    }

    componentDidMount() {
        this.props.fetchSoups();
    }

    render() {
        return (
            <div className='soup-menu-page'>
                <Header/>
                <Navbar/>
                    <div className='soup-menu-page-content__wrapper'>
                        <div className='center-column'>
                            <MenuTitle className='soup-menu-page-title' title='Soup Menu'/>
                            <div className='soups'>
                                {
                                    this.props.fetchSoups.map(soups => {
                                        return (
                                            <Soups {...soups} key={soups.soupID}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                <SocialMediaFooter/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { fetchSoups } = state.soups;
    return {
        fetchSoups
    }
}

export default connect(mapStateToProps, actions)(SoupMenu);