import React, { Component } from 'react';
import { Link } from 'react-router-dom;'

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenuItemFront: true
        };
    }

    handleMouseEnter() {
        this.setState({ showMenuItemFront: false });
    }

    handleMouseLeave() {
        this.setState({ showMenuItemFront: true });
    }
    

    render() {
        const { id, front_thumb_image_url, description, price } = this.props.item;
        return (
            <Link to={`/api/menus/${id}`}>
                <div 
                    className='front-menu-item-wrapper'
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    <img 
                        className={
                            'front-menu-item-img ' + this.state.showMenuItemFront
                        }
                        src={front_thumb_image_url}
                    />
                    <div className='subtitle'>{description}</div>
                    <div className='price'>{price}</div> 
                </div>
            </Link>
        );
    }
}