import React, { Component } from 'react';
import axios from 'axios';

export default class PhlogEditor extends Component {

  state = {
    phlog_title: '',
    phlog_description: '',
    phlog_status: '',
    phlog_image_url: null,
    position: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      phlog_image_url: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('phlog_image_url', this.state.phlog_image_url);
    form_data.append('title', this.state.title);
    form_data.append('description', this.state.description);
    form_data.append('phlog_status', this.state.phlog_status);
    form_data.append('position', this.state.position);
    let url = 'http://localhost:8000/phlogapi/posts/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='phlog_title' value={this.state.phlog_title} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Description' id='phlog_description' value={this.state.phlog_description} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='Position' id='position' value={this.state.position} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='phlog_status' id='phlog_status' value={this.state.phlog_status} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="phlog_image_url"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
















// import React, { Component } from 'react';
// import axios from 'axios';
// import DropzoneComponent from 'react-dropzone-component';

// import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
// import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

// class PhlogEditor extends Component {
   
//     buildForm() {
//         let formData = new FormData();

//         formData.append('phlog[phlog_status]', this.state.phlog_status);
//         formData.append('phlog[position]', this.state.position);

//         if (this.state.phlog_image_url) {
//             formData.append(
//                 'phlog[phlog_image_url]',
//                 this.state.phlog_image_url
//             );
//         }
//         console.log(formData);
//         return formData;
//     }
 
//     handleSubmit = async (event, request, phlogID) => {
//         event.preventDefault();

//         const phlogPostData = this.buildForm();

//         axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//         axios.defaults.xsrfCookieName = "csrftoken";
//         axios.defaults.headers = {
//             "Content-Type": "application/json",
//             Authorization: `JWT ${this.props.token}`,
//         };

//         if (request === 'post') {
//             await axios.post('http://127.0.0.1:8000/phlogapi/phlog/create/', phlogPostData)
//                 .then(res => {
//                     if (res.status === 201) {
//                         this.props.history.push('/');
//                     }
//                 })
//         } else if (request === 'put') {
//             await axios.put(`http://127.0.0.1:8000/phlogapi/phlog/${phlogID}/update/`, phlogPostData)
//                 .then(res => { 
//                     if (res.status === 200) {
//                         this.props.history.push('/');
//                     }
//                 })
//         }
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className='phlog-editor-wrapper'>
//                 <div className='two-column'>
//                     <input
//                         type='text'
//                         name='position'
//                         placeholder='Position'
//                         value={this.state.position}
//                         onChange={this.handleChange}
//                     />

//                     <select
//                         name='phlog status'
//                         value={this.state.phlog_status}
//                         onChange={this.handleChange}
//                         className='select-element'
//                     >
//                         <option value='Draft'>Draft</option>
//                         <option value='Published'>Published</option>
//                     </select>
//                 </div>

//                 <div className='image-uploaders'>
//                     {this.state.phlog_image_url && this.state.editMode ? (
//                         <div className='phlog-manager-image-wrapper'>
//                             <img src={this.state.phlog_image_url} />

//                         <div className='remove-image-link'>
//                             <a onClick={() => this.deleteImage('phlog_image')}>
//                                 Remove Photos
//                             </a>
//                         </div>
//                     </div>
//                 ) : (
//                     <DropzoneComponent
//                         ref={this.phlogImageRef}
//                         config={this.componentConfig()}
//                         djsConfig={this.djsConfig()}
//                         eventHandlers={this.handlePhlogImageDrop()}
//                     >
//                         <div className='phlog-msg'>Phlog Photo</div>
//                     </DropzoneComponent>
//                 )}
//                 </div>
//                     <button className='btn' type='submit'>Save</button>
//             </form>
//         );
//     }
// }

// export default PhlogEditor;