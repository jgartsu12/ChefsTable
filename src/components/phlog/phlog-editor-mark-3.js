import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

class PhlogEditor extends Component {
   
    buildForm() {
        let formData = new FormData();

        formData.append('phlog[phlog_status]', this.state.phlog_status);
        formData.append('phlog[position]', this.state.position);

        if (this.state.phlog_image_url) {
            formData.append(
                'phlog[phlog_image_url]',
                this.state.phlog_image_url
            );
        }
        console.log(formData);
        return formData;
    }
 
    handleSubmit = async (event, request, phlogID) => {
        event.preventDefault();

        const phlogPostData = this.buildForm();

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `JWT ${this.props.token}`,
        };

        if (request === 'post') {
            await axios.post('http://127.0.0.1:8000/phlogapi/phlog/create/', phlogPostData)
                .then(res => {
                    if (res.status === 201) {
                        this.props.history.push('/');
                    }
                })
        } else if (request === 'put') {
            await axios.put(`http://127.0.0.1:8000/phlogapi/phlog/${phlogID}/update/`, phlogPostData)
                .then(res => { 
                    if (res.status === 200) {
                        this.props.history.push('/');
                    }
                })
        }
    };

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