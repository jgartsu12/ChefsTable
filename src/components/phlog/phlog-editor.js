import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import DropzoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

class PhlogEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            phlog_status: '',
            phlog_image: '',
            editMode: false,
            position: '',
            apiUrl: 'http://127.0.0.1:8000/phlogapi/phlog/',
            apiAction: 'post'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handlePhlogImageDrop = this.handlePhlogImageDrop.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        
        this.phlogImageRef = React.createRef();
    }

    deleteImage(event) {
        event.preventDefault();
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios
            .delete(
                `http://127.0.0.1:8000/phlogapi/phlog/${this.props.id}/delete`,
                { withCredentials: true }
            )
            .then(response => {
                this.props.handlePhlogImageDelete();
            })
            .catch(error => {
                console.log('deleteImage failed', error)
        });
    }

    componentDidUpdate() {
        if (Object.keys(this.props.editMode).length > 0) {
            const {
                id,
                phlog_image,
                phlog_status,
                position
            } = this.props.editMode;

            this.props.clearPhlogsToEdit();

            this.setState({
                id: id,
                phlog_image: phlog_image || '',
                phlog_status: phlog_status || '',
                position: position || '',
                editMode: true,
                apiUrl: `http://127.0.0.1:8000/phlogapi/phlog/${this.props.id}/update`,
                apiAction: 'patch'
            });
        } 
    }

    handlePhlogImageDrop() {
        return {
            addedfile: file => this.setState({ phlog_image_url: file })
        };
    }


    componentConfig() {
        return {
          iconFiletypes: [".jpg", ".png"],
          showFiletypeIcon: true,
          postUrl: "https://httpbin.org/post"
        };
    }
    
    djsConfig() {
        return {
          addRemoveLinks: true,
          maxFiles: 3
        };
    }

    buildForm() {
        let formData = new FormData();

        formData.append('phlog[phlog_status]', this.state.phlog_status);

        if (this.state.phlog_image) {
            formData.append(
                'phlog[phlog_image]',
                this.state.phlog_image
            );
        }

        return formData;
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true
        })
        .then(response => {
            if (this.state.phlog_image) {
                this.phlogImageRef.current.dropzone.removeAllFiles();
            }

            this.setState({
                phlog_status: '',
                phlog_image: ''
            });

            if (this.props.editMode) {
                this.props.handleFormSubmission(response.data);
            } else {
                this.props.handleSuccessfulFormSubmission(response.data);
            }
        })
        .catch(error => {
            console.log('handleSubmit for phlog error', error);
        });

     event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='phlog-editor-wrapper'>
                <div className='one-column'>
                    <div className='image-uploaders'>
                        {this.props.editMode && this.props.phlog_image_url ? (
                            <div className='phlog-manager'>
                                <img src={this.props.phlog.phlog_image_url} />
                            
                            <div className='remove-image-link'>
                                <a onClick={() => this.deleteImage('phlog_image')}>
                                    Remove Photos
                                </a>
                            </div>
                        </div>
                    ) : (
                       <DropzoneComponent
                            ref={this.phlogImageRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handlePhlogImageDrop()}
                        >
                            <div className='phlog-msg'>Phlog Photo</div>
                        </DropzoneComponent>
                    )}
                </div>
                    <button className='btn' type='submit'>Save</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps)(PhlogEditor);