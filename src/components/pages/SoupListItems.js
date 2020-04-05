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
        const { id, title, name, description, front_thumb_img_url } = this.props.item;
        return (
            // <Link to={`/soups/${id}`}>
            <div>
               <div 
                    className='front-soup-menu-wrapper'
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    <img 
                        className={'front-soup-image' + this.state.showSoupBack}
                        src={front_thumb_img_url}
                    />
                </div>
                <div 
                    className='back-soup-menu-wrapper'
                    onMouseEnter={() => this.handleMouseEnter()}
                >
                    <div className='back-soup-menu-title'>
                        {title}
                    </div>
                    <div className='back-soup-menu-name'>
                        {name}
                    </div>
                    <div className='back-soup-menu-description'>
                        {description}
                    </div>
                </div>
            </div>
            // </Link>
        );
    }
}        