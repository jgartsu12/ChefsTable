import React, { Component } from 'react';
import axios from 'axios';
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
            apiUrl: 'http://jgartsu12.pythonanywhere.com/phlogapi/phlog/',
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
        axios
            .delete(
                `http://jgartsu12.pythonanywhere.com/phlogapi/phlog/${this.props.id}/delete`,
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
        if (Object.keys(this.props.phlogToEdit).length > 0) {
            // debugger;
            const {
                id,
                phlog_image,
                phlog_status,
                position
            } = this.props.phlogToEdit;

            this.props.clearPhlogsToEdit();

            this.setState({
                id: id,
                phlog_image: phlog_image || '',
                phlog_status: phlog_status || '',
                position: position || '',
                editMode: true,
                apiUrl: `http://jgartsu12.pythonanywhere.com/phlogapi/phlog/${this.props.id}/update`,
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
        formData.append('phlog[position]', this.state.position);

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
                <div className='two-column'>
                    <input
                        type='text'
                        name='position'
                        placeholder='Position'
                        value={this.state.position}
                        onChange={this.handleChange}
                    />

                    <select
                        name='phlog status'
                        value={this.state.phlog_status}
                        onChange={this.handleChange}
                        className='select-element'
                    >
                        <option value='Published'>Published</option>
                        <option value='Draft'>Draft</option>
                    </select>
                </div>

                <div className='image-uploaders'>
                    {this.props.editMode && this.props.phlog_image_url ? (
                        <div className='phlog-manager-image-wrapper'>
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
            </form>
        );
    }
}

export default PhlogEditor;