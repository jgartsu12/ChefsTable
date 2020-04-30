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
            phlog_image_url : '',
            editMode: false,
            position: '',
            apiUrl: 'http://127.0.0.1:8000/phlogapi/phlog/create/',
            apiAction: 'post'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handlePhlogImageDrop = this.handlePhlogImageDrop.bind(this);
        this.deleteImage = this.deleteImage.bind(this);

        this.phlogImageRef = React.createRef();
        this.dropzone= React.createRef();
    }

    deleteImage(event) {
        event.preventDefault();
        axios
            .delete(
                `http://127.0.0.1:8000/phlogapi/phlog/${this.state.id}/delete/`,
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
            const {
                id,
                phlog_image_url,
                phlog_status,
                position
            } = this.props.phlogToEdit;

            this.props.clearPhlogToEdit();

            this.setState({
                id: id,
                phlog_image_url: phlog_image_url || '',
                phlog_status: phlog_status || '',
                position: position || '',
                editMode: true,
                apiUrl: `http://127.0.0.1:8000/phlogapi/`,
                apiAction: 'patch'
            });
            
        } 
    }

    handlePhlogImageDrop() {
        // console.log(this.state);
        return {
            addedfile: file => this.setState({ phlog_image_url: file })
        };
    };

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

    buildForm() {
        let formData = new FormData();

        formData.append('[phlog[id]', this.state.id);
        formData.append('phlog[phlog_status]', this.state.phlog_status);
        formData.append('phlog[position]', this.state.position);

        if (this.state.phlog_image_url) {
            formData.append(
                'phlog[phlog_image_url]',
                this.state.phlog_image_url
            );
        }
        // console.log(formData);
        return formData;
    }


    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        // console.log(this.state);
        axios({
            headers: {'content-type':'multipart/form-data'},
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true,
            xsrfHeaderName: 'X-CSRFTOKEN',
            xsrfCookieName: 'crsftoken',
            // headers: {
            //     'Content-type': 'application/json',
            //     Authorization: `JWT ${localStorage.getItem('token')}` ,
            // },
            // body: JSON.stringify(data)

        })
        .then(response => {
            console.log(response);
            // console.log(this.props);
            // localStorage.setItem('token', json.token);
            if (this.state.editMode) {
                this.props.handleEditPhlogSubmission();
            } else {
                this.props.handleNewPhlogSubmission(response.data.phlogItems);
                // debugger;
            }

            this.setState({
                id: '',
                phlog_status: '',
                phlog_image_url: '',
                position: '',
                editMode: false,
                apiUrl:'http://127.0.0.1:8000/phlogapi/phlog/create/', 
                apiAction: 'post'
            });

            [this.phlogImageRef].forEach(ref => {
                ref.current.dropzone.removeAllFiles();
            });
        })
        .catch(error => {
            console.log('handleSubmit phlogEditor error', error);
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
                        <option value='Draft'>Draft</option>
                        <option value='Published'>Published</option>
                    </select>
                </div>

                <div className='image-uploaders'>
                    {this.state.phlog_image_url && this.state.editMode ? (
                        <div className='phlog-manager-image-wrapper'>
                            <img src={this.state.phlog_image_url} />

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