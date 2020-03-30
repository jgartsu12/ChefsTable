import React, { Component } from 'react';
import { Link } from 'react-router-dom;'

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItemClass: ""
        };
    }

    handleMouseEnter() {
        this.setState({ menuItemClass: "plate-flip" });
    }

    handleMouseLeave() {
        this.setState({ menuItemClass: "" });
    }

    render() {
        const { id, description, price } = this.props.item;
        return (
            <Link to={`/api/${id}`}>
                <div 
                    className='menu-item-wrapper'
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}
                    >
                    <div className='subtitle'>{description}</div>
                    <div className='price'>{price}</div> 
                </div>
            </Link>
        );
    }
}