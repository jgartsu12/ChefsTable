import React, { Component } from "react";
import axios from "axios";

import Header from '../headernavbarfooter/header';
import SocialMediaFooter from '../headernavbarfooter/socialMediaFooter';
import PhlogEditor from '../phlog/phlog-editor-mark-3';
import PhlogEditorSidebarList from '../phlog/phlog-editor-sidebar';

export default class PhlogManager extends Component {
    constructor() {
        super();

        this.state = {
            phlogItems: [],
            phlogToEdit: {}
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
                `http://localhost:5000/api/v1/image/${id}`,
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
          .get('http://localhost:5000/api/v1/phlogs',
            {
               withCredentials: true 
            }
          )
          .then(response => {
              this.setState({
                  phlogItems: [...response.data.phlogItems]
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
            <div>
                {/* <Header/> */}
                <div className='phlog-manager'>
                    {/* <div className='centered-column'> */}
                        <PhlogEditor
                            handleNewPhlogSubmission={this.handleNewPhlogSubmission}
                            handleEditPhlogSubmission={this.handleEditPhlogSubmission}
                            handlePhlogSubmissionError={this.handlePhlogSubmissionError}
                            clearPhlogToEdit={this.clearPhlogToEdit}
                            phlogToEdit={this.state.phlogToEdit}
                        />
                    {/* </div> */}

                    <div className='right-column'>
                        <PhlogEditorSidebarList
                            handleDeleteClick={this.handleDeleteClick}
                            data={this.state.phlogItems}
                            handleEditClick={this.handleEditClick}
                        />
                    </div>
                </div>
                <SocialMediaFooter/>
            </div>
        );
    }
}

