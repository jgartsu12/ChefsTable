import React, { Component } from 'react';
import axios from 'axios';
// import Header from '../components/headernavbarfooter/header';
// import Navbar from '../components/headernavbarfooter/navbar';
// import SocialMediaFooter from '../components/headernavbarfooter/socialMediaFooter';
import Soups from './soups-edited';

export default class MenuContainer extends Component {
    constructor() {
        super();

        this.state = {
            soups: []
        };

        this.getSoups = this.getSoups.bind(this);
    }

    getSoups() {
        axios
            .get('http://127.0.0.1:8000/api/soups/')
            .then(response => {
                this.setState({
                    soups: response.data
                });
            })
            .catch(error => {
                console.log('getSoups failed', error);
        });
    }

    // soups() {
    //     this.state.data.map(soups => {
    //         return <Soups key={soups.id} title={soups.title} name={soups.name} description={soups.description} front_thumb_img_url={soups.front_thumb_img_url} />
    //     });
    // }

    componentDidMount() {
        this.getSoups();
    }

    render() {
        const { soups } = this.state;
        return (
            <div className='soups'>
              { soups.map(soup => {
                  const { id, title, name, description, front_thumb_img_url } = soup;
                  return (
                      <ul key={id}>
                          <li>{title}</li>
                          <li>{name}</li>
                          <li>{description}</li>
                          <li>{front_thumb_img_url}</li>
                      </ul>
                  )
              })}
            </div>
        );
    }
}