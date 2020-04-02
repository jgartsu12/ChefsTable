import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

class Soups extends Component {
    render() {
        const { soupID, name, description, front_thumb_img_url } = this.props;
        return (
            <div className='soups'>
                <div className='soups__front'>
                    <img className='soups__front__image' src={front_thumb_img_url}/>
                </div>
                <div className='soups__back'>
                    <div className='soups__back__name'>
                        {name}
                    </div>
                    <div className='soups__back__description'>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

Soups = connect(null, actions)(Soups);

export default Soups;