import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class BreakfastFoods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBreakyBack: false
        };
    }

    handleMouseEnter() {
        this.setState({ showBreakyBack: true });
    }

    handleMouseLeave() {
        this.setState({ showBreakyBack: false });
    }

    render() {
        const { id, title, name, description, front_thumb_img_url } = this.props.item;
        return (
            <Link to={`/breakfast/${id}`}>
               <div 
                    className='front-breakfast-menu-wrapper'
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    <img 
                        className={'front-breakfast-image' + this.state.showBreakyBack}
                        src={front_thumb_img_url}
                    />
                </div>
                <div 
                    className='back-breakfast-menu-wrapper'
                    onMouseEnter={() => this.handleMouseEnter()}
                >
                    <div className='back-breakfast-menu-title'>
                        {title}
                    </div>
                    <div className='back-breakfast-menu-name'>
                        {name}
                    </div>
                    <div className='back-breakfast-menu-description'>
                        {description}
                    </div>
                </div>
            </Link>
        );
    }
}   