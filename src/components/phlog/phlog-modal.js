import React, { Component } from 'react';
import ReactModal from 'react-modal';

import PhlogEditor from '../phlog/phlog-editor';

ReactModal.setAppElement('.app-wrapper');

export default class PhlogModal extends Component {
    constructor(props) {
        super(props);

        this.modalStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%',
                width: '800px'
            },
            overlay: {
                backgroundColor: '#333'
            }
        };

        this.handleSuccessfullFormSubmission = this.handleSuccessfullFormSubmission.bind(this);
    }

    handleSuccessfullFormSubmission(phlog) {
        this.props.handleSuccessfullFormSubmission(phlog);
    }

    render() {
        return (
            <ReactModal
                style={this.modalStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }}
                isOpen={this.props.modalIsOpen}
                >
                    <PhlogEditor 
                        handleSuccessfullFormSubmission={this.handleSuccessfullFormSubmission}
                    />
                </ReactModal>
        );
    }
}