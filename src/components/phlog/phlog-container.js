import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

// import BlogItem from "../blog/blog-item";
// import BlogModal from "../modals/blog-modal";

export default class PhlogContainer extends Component {
    constructor() {
        super();

        this.state = {
            phlogContentItems: [],
            countTotal: 0,
            currentPage: 0,
            isLoading: true,
            openPhlogModal: false
        };
    }

    // handleDeleteClick(blog) {
    //     // axios
    // }
}