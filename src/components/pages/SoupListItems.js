import React, { Component } from 'react';
// import { Link } from "react-router-dom";

export default class Soups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSoupBack: false
        };
    }

    handleMouseEnter() {
        this.setState({ showSoupBack: true });
    }

    handleMouseLeave() {
        this.setState({ showSoupBack: false });
    }

    render() {
        const { _id, _title, name, description, front_thumb_img_url } = this.props.item;
        return (
            <div className='menu-items'>
               <div 
                    className='menu-items__front'
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    <img 
                        className='menu-items__front__image'
                        src={front_thumb_img_url}
                    />
                </div>
                <div 
                    className='menu-items__back'
                    onMouseEnter={() => this.handleMouseEnter()}
                >
                    <div className='menu-items__back__name'>
                        {name}
                    </div>
                    <div className='menu-items__back__description'>
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}        