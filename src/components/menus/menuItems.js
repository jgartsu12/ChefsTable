import React, { Component } from 'react';

export default class MenuItems extends Component {
    render() {
        console.log(this.props);
        const { className, menuItem } = this.props;
        const { _id, name, description, price } = menuItem;
        return (
            <div className={`${className} menu-item`}>
                <div className='menu_item__front-view'>
                    {/* make image dynamic image should be picture of the ind food item */}
                    <img className='menu-item__image' src='http://via.placeholder.com/130x130'/>
                    <div className='menu-item__name'>{name}</div>
                </div>
                <div className='menu_item__back-view'>
                    <div className='menu-item__description'>{description}</div>
                    <div className='menu-item__price'>{price}</div>
                </div>
            </div>
        )
    }
}