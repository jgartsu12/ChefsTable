import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from 'dropzo'

export default class PhlogEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            phlog_title: '',
            phlog_status: '',
            phlog_description: '',
            phlog_image_url: '',
            apiUrl: 'http://127.0.0.1:8000/phlogapi/phlog/',
            apiAction: 'post'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.featuredImageRef = React.createRef();
    }

    deleteImage(image) {
        axios
            .delete(
                `http://127.0.0.1:8000/phlogapi/phlog/${this.props.phlog.id}?image=${image}/delete`,
                { withCredentials: true }
            )
            .then(response => {
                this.props.handlePhlogImageDelete();
            })
            .catch(error => {
                console.log('deleteImage error', error)
        });
    }

    componentWillMount() {
        if (this.props.editMode) {
            this.setState({
                id: this.props.phlog.id,
                phlog_title: this.props.phlog.phlog_title,
                phlog_status: this.props.phlog.phlog_status,
                phlog_description: this.props.phlog.pholog_description,
                apiUrl: `http://127.0.0.1:8000/phlogapi/phlog/${this.props.phlog.id}?image=${image}/update`,
                apiAction: 'patch'
            });
        }
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
          maxFiles: 1
        };
    }

    handlePhlogImageDrop() {
        return {
            addedfile: file => this.setState({ phlog_image_url: file })
        };
    }

    buildForm() {
        let formData = new FormData();

        formData.append('phlog[phlog_title]', this.state.title);
        formData.append('phlog[phlog_status]', this.state.phlog_status);
        formData.append('phlog[phlog_description]', this.state.phlog_description)

        if (this.state.phlog_image_url) {
            formData.append(
                'phlog[phlog_image_url]',
                this.state.phlog_image_url
            );
        }

        return formData;
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
                this.featuredImageRef.current.dropzone.removeAllFiles();
            }

            this.setState({
                phlog_title: '',
                phlog_status: '',
                phlog_description: '',
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

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='phlog-form-wrapper'>
                <div className='two-column'>
                    <input 
                        type='text'
                        onChange={this.handleChange}
                        name='phlog_title'
                        placeholder='Phlog Title'
                        value={this.state.phlog_title}
                    />

                    <input
                        type='text'
                        onChange={this.handleChange}
                        name='phlog_status'
                        placeholder='Phlog status'
                        value={this.state.phlog_status}
                    />

                    <input 
                        type='text'
                        onChange={this.handleChange}
                        name='phlog_description'
                        placeholder='Describe the phlog'
                        value={this.state.phlog_description}
                    />
                </div>

                <div className='image-uploaders'>
                    {this.props.editMode && this.props.phlog_image_url ? (
                        <div className='phlog-manager'>
                            <img src={this.props.phlog.phlog_image_url} />

                            <div className='remove-image-link'>
                                <a onClick={() => this.deleteImage('phlog_image_url')}>
                                    Remove Phlog
                                </a>
                            </div>
                        </div>
                    ) : (
                       <DropzoneComponent
                            ref={this.featuredImageRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handleFeaturedImageDrop()}
                        >
                            <div className='phlog-msg'>Phlog Photo</div>
                        </DropzoneComponent>
                    )}
                </div>
                <button className='btn'>Save</button>
            </form>
        );
    }
}