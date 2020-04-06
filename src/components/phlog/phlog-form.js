import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

export default class PhlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            phlog_title: '',
            phlog_status: '',
            phlog_description: '',
            phlog_image_url: '',
            // apiUrl:
            // apiAction: post
        };
    }
}