import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class LunchFoods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLunchBack: false
        };
    }

    handleMouseEnter() {
        this.setState({ showLunchBack: true });
    }

    handleMouseLeave() {
        this.setState({ showLunchBack: false });
    }

    render() {
        const { id, title, name, description, front_thumb_img_url } = this.props.item;
        return (
            <Link to={`/lunch/${id}`}>
               <div 
                    className='front-lunch-menu-wrapper'
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    <img 
                        className={'front-lunch-image' + this.state.showLunchBack}
                        src={front_thumb_img_url}
                    />
                </div>
                <div 
                    className='back-lunch-menu-wrapper'
                    onMouseEnter={() => this.handleMouseEnter()}
                >
                    <div className='back-lunch-menu-title'>
                        {title}
                    </div>
                    <div className='back-lunch-menu-name'>
                        {name}
                    </div>
                    <div className='back-lunch-menu-description'>
                        {description}
                    </div>
                </div>
            </Link>
        );
    }
}   