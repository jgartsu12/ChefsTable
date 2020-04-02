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
        super()
    }

    componentDidMount() {
        this.props.fetchSoups();
    }

    renderSoupMenu() {
        const soups = this.props.soups.map((soup, soupID) => {
            if(soupID < 11) {
                return (
                    <Soups {...soup} key={soupID}/>
                )
            }
        })
        return soups;
    }

    render(){
        return (
            <div>
                <Header/>
                <Navbar/>
                <div className='soup-menu-page'>
                    <div className='soup-menu-page-content__wrapper'>
                        <div className='center-column'>
                            <MenuTitle className='soup-menu-page-title' title='Soup Menu'/>
                            <ul className='soup-menu__soups'>
                                {this.renderSoupMenu()}
                            </ul>
                        </div>
                    </div>
                </div>
                <SocialMediaFooter/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        SoupMenu: state.soups.SoupMenu
    }
}

export default connect(mapStateToProps, actions)(SoupMenu);