import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/dropzone/dist/min/dropzone.min.css';


export default class PhlogEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.handleDeleteImage = this.handleDeleteImage.bind(this);

        this.phlogImageRef = React.createRef();
    }

    handleDeleteImage = event => {
        event.preventDefault();
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios
            .delete(
                `http://127.0.0.1:8000/phlogapi/phlog/${this.state.id}/delete`)
            .then(response => {
                if (response.status === 204) {
                    this.props.history.push(`/`);
                }
            })
            .catch(error => {
                console.log('handleDeleteImage error', error)
        });
    };

    componentDidUpdate() {
        if (Object.keys(this.props.phlogsToEdit).length > 0) {
            const {
                id,
                phlog_image_url,
                phlog_status,
                position
            } = this.props.phlogsToEdit;

            this.props.clearPhlogsToEdit();

            this.setState({
                id: id,
                phlog_image_url: phlog_image_url || '',
                phlog_status: phlog_status || '',
                position: position || '',
                editMode: true,
                apiUrl: `http://127.0.0.1:8000/phlogapi/phlog/${id}`,
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

        if (this.state.phlog_image_url) {
            formData.append(
                'phlog[phlog_image_url]',
                this.state.phlog_image_url
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
            if (this.state.phlog_image_url) {
                this.phlogImageRef.current.dropzone.removeAllFiles();
            }

            this.setState({
                phlog_status: '',
                phlog_image_url: ''
            });

            if (this.props.editMode) {
                this.props.handleFormSubmission(response.data.phlog);
            } else {
                this.props.handleSuccessfulFormSubmission(response.data.phlog);
            }
        })
        .catch(error => {
            console.log('handleSubmit for phlog error', error);
        });

     event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='phlog-form-wrapper'>
                <div className='three-column'>
                    <div className='image-uploaders'>
                        {this.props.editMode && this.props.phlog_image_url ? (
                            <div className='phlog-manager'>
                                <img src={this.props.phlog.phlog_image_url} />
                            <div className='remove-image-link'>
                                <a onClick={() => this.deleteImage('phlog_image_url')}>
                                    Remove Photos
                                </a>
                            </div>
                        </div>
                    ) : (
                       <DropzoneComponent
                            ref={this.phlogImageRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handleFeaturedImageDrop()}
                        >
                            <div className='phlog-msg'>Phlog Photo</div>
                        </DropzoneComponent>
                    )}
                </div>
                    <button className='btn' type='submit'>
                        Save
                    </button>
                </div>
            </form>
        );
    }
}