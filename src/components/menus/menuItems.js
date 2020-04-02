import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenuItemBack: false
        };
    }

    handleMouseEnter() {
        this.setState({ showMenuItemBack: true });
    }

    handleMouseLeave() {
        this.setState({ showMenuItemBack: false });
    }

    render() {
        const { foodID, food_thumb_img, description, price } = this.props.item;
        return (
            <Link to={`/api/${foodID}`}>
                <div className='menu-item-wrapper'>
                    <div 
                        className={'menu-item__front-view' + this.state.showMenuItemBack}
                        onMouseEnter={() => this.handleMouseEnter()}
                       >
                        <img className='menu-item__image' src={food_thumb_img}/>
                    </div>
                    <div 
                        className={'menu-item__back-view' + this.state.showMenuItemBack}
                        onMouseLeave={() => this.handleMouseLeave()}
                      >
                        <div className='menu-item__description'>{description}</div>
                        <div className='menu-item__price'>{price}</div>
                    </div>
                </div>
            </Link>
        );
    }
}