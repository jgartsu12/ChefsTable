import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import MenuTitle from '../menus/menuTitle';
import Soups from '../menus/soups';

class SoupMenu extends Component {

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
            <div className='updated-soup-menu-page'>
                <div className='updated-soup-menu-page-content__wrapper'>
                    <div className='center-column'>
                        <MenuTitle className='updated-soup-menu-page-title' title='Soup Menu'/>
                        <ul className='updated-soup-menu__soups'>
                            {this.renderSoupMenu()}
                        </ul>
                    </div>
                </div>
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