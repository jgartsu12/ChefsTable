import React, { Component } from "react";
import axios from "axios";

// import items

export default class SiteManagerContainer extends Component {
    constructor(){
        super();

        this.state = {
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }
}