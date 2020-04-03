import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Soups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            soups: []
        };
    }
    render() {
        const {  id, title, name, description, front_thumb_img_url } = this.props.soups;
        return (
            <Link to={`/soups/${id}`}>
                <div className='soups-wrapper'>
                    <h1>{name}</h1>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <img src={front_thumb_img_url}/>
                </div>
            </Link>
        );
    }
}