import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';

// import MenuTitle from './menuTitle';

class MenuDetail extends Component {
    state = {
        menuItem: {}
    };

    componentDidMount() {
        this.getMenuItem();
    }
    
    getMenuItem() {
        const foodID = this.props.match.params.foodID;
        axios
            .get(`http://127.0.0.1:8000/api/${foodID}`)
            .then(res => {
                this.setState({
                    menuItem: res.data
                });
            })
            .catch(error => {
                console.log('getMenuItem error', error);
        })
    }
   
    render() {
        const {
            food_thumb_img,
            description,
            prices
        } = this.state.menuItem;

        const thumbStyles={
            width='200px'
        };
        
        return (
            <div className='menu-detail-wrapper'>
                <div className='menu-detail-front'>
                    <img src={food_thumb_img} styles={thumbStyles}/>
                </div>
                <div className='menu-details-back'>
                    <div className='menu-detail-description'>{description}</div>
                    <div className='menu-detail-prices'>{prices}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps)(MenuDetail);