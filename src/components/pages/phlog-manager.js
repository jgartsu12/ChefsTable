import React, { Component } from "react";
import axios from "axios";
// import { connect } from "react-redux";

import PhlogEditor from '../phlog/phlog-editor';

export default class PhlogManager extends Component {
    constructor() {
        super();

        this.state = {
            phlogItems: [],
            photoToEdit: {}
        };

        this.handleNewPhlogSubmission = this.handleNewPhlogSubmission.bind(this);
        this.handleEditPhlogSubmission = this.handleEditPhlogSubmission.bind(this);
        this.handlePhlogSubmissionError = this.handlePhlogSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPhlogToEdit = this.clearPhlogToEdit.bind(this);
    }

    clearPhlogToEdit() {
        this.setState({
            phlogToEdit: {}
        });
    }

    handleEditClick(phlogItem) {
        this.setState({
            phlogToEdit: phlogItem
        });
    }

    handleDeleteClick(id) {
        axios
            .delete(
                `http://127.0.0.1:8000/phlogapi/phlog/${id}`,
                { withCredentials: true }
            )
            .then(response => {
                this.setState({
                    phlogItems: this.state.phlogItems.filter(item => {
                        return item.id !== id;
                    })
                });

                return response.data;
            })
            .catch(error => {
                console.log('handleDeleteClick error', error);
        });
    }

    handleEditPhlogSubmission() {
        this.getPhlogItems();
    }

    handleNewPhlogSubmission(phlogItem) {
        this.setState({
            phlogItems: [phlogItem].concat(this.state.phlogItems)
        });
    }

    handlePhlogSubmissionError(error) {
        console.log('handlePhlogSubmissionError', error);
    }

    getPhlogItems() {
        axios
          .get('http://127.0.0.1:8000/phlogapi/phlog',
            {
               withCredentials: true 
            }
          )
          .then(response => {
              this.setState({
                  phlogItems: [...response.data]
              });
          })
          .catch(error => {
              console.log('getPhlogItems error', error);
          });
    }

    componentDidMount() {
        this.getPhlogItems();
    }

    render() {
        return (
            <div className='phlog-manager'>
                <div className='centered-column'>
                    <PhlogEditor
                        handleNewPhlogSubmission={this.handleNewPhlogSubmission}
                        handleEditPhlogSubmission={this.handleEditPhlogSubmission}
                        handlePhlogSubmissionError={this.handleEditPhlogSubmission}
                        clearPhlogToEdit={this.clearPhlogToEdit}
                        phlogToEdit={this.phlogToEdit}
                    />
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         token: state.token
//     };
// }

// export default connect(mapStateToProps)(PhlogManager);