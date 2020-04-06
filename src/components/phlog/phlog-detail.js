import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import PhlogEditor from './phlog-editor';
import PhlogImages from './phlog-images'

export default class PhlogDetail extends Component {
    constructor(props) {
        super(props);
    

        this.state = {
            idNow: this.props.match.params.id,
            phlogContentItem: {},
            editMode: false
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
        this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this);
    }

    handleUpdateFormSubmission(phlog) {
        this.setState({
            phlogContentItem: phlog,
            editMode: false
        });
    }

    handleFeaturedImageDelete() {
        this.setState({
            phlogContentItem: {
                phlog_image_url: ''
            }
        });
    }

    handleEditClick() {
        if (this.props.loggedInStatus === 'LOGGED_IN') {
            this.setState({ editMode: true });
        }
    }

    getPhlogContentItem() {
        axios
            .get(
                `http://127.0.0.1:8000/phlogapi/phlog/${this.state.phlog.idNow}`
            )
            .then(response => {
                this.setState({
                    phlogContentItem: response.data.phlog
                });
            })
            .catch(error => {
                console.log('getPhlogContentItem error', error);
        });
    }

    componentDidMount() {
        this.getPhlogContentItem();
    }

    render() {
        const {
            phlog_title,
            phlog_description,
            phlog_image_url,
            phlog_status
        } = this.state.phlogContentItem;

        const phlogManager = () => {
            if (this.state.editMode) {
                return (
                    <PhlogEditor
                        handleFeaturedImageDelete={this.handleFeaturedImageDelete}
                        handleUpdateFormSubmission={this.handleUpdateFormSubmission}
                        editMode={this.state.editMode}
                        phlog={this.state.phlogContentItem}
                    />
                );
                } else {
                    return (
                        <div className='phlog-content'>
                            <h1 onClick={this.handleEditClick}>{phlog_title}</h1>

                            <PhlogImages img={phlog_image_url} />

                            <div className='phlog-description'>{ReactHtmlParser(phlog_description)}</div>
                        </div>
                    );
                }
            }

            return <div className='phlog-container'>{phlogManager()}</div>;
    }
}