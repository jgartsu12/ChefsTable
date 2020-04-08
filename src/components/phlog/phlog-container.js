import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import PhlogContentItems from './phlog-content-items';
import PhlogEditor from './phlog-editor';
import PhlogModal from './phlog-modal';

export default class PhlogContainer extends Component {
    constructor() {
        super();

        this.state = {
            phlogContentItems: [],
            countTotal: 0,
            currentPage: 0,
            isLoading: true,
            phlogModalIsOpen: false
        };

        this.getPhlogContentItems = this.getPhlogContentItems.bind(this);
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener('scroll', this.onScroll, false);
        this.handleNewPhlogClick = this.handleNewPhlogClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleSuccessfulNewPhlogSubmission = this.handleSuccessfulNewPhlogSubmission.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(phlog) {
        axios
            .delete(
                `http://127.0.0.1:8000/phlogapi/phlog/${phlog.id}`,
                { withCredentials: true }
            )
            .then(response => {
                this.setState({
                    phlogContentItems: this.state.phlogContentItems.filter(phlogContentItem => {
                        return phlog.id !== phlogItem.id;
                    })
                });

                return response.data;
            })
            .catch(error => {
                console.log('delete phlog error', error);
        })
    }

    handleSuccessfulNewPhlogSubmission(phlog) {
        this.setState({
            phlogModalIsOpen: false,
            phlogContentItems: [phlog].concat(this.state.phlogContentItems)
        });
    }

    handleNewPhlogClick() {
        this.setState({
            phlogModalIsOpen: true
        });
    }

    onScroll() {
        if (
            this.state.isLoading || 
            this.state.phlogContentItems.length === this.state.countTotal
        ) {
            return;
        }

        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            this.getPhlogContentItems();
        }
    }

    getPhlogContentItems() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });

        axios
            .get(`http://127.0.0.1:8000/phlogapi/phlog?page=${this.state.currentPage
                }`,
                {
                    withCredentials: true
                }
            )
            .then(response => {
                console.log('getting phlog data', response.data);
                this.setState({
                    phlogContentItems: this.state.phlogContentItems.concat(response.data.phlog),
                    countTotal: response.data.meta.total_records,
                    isLoading: false
                });
            })
            .catch(error => {
                console.log('getPhlogContentItems error', error);
        });
    }

    componentWillMount() {
        this.getPhlogContentItems();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    render() {
        const phlogRecords = this.state.phlogContentItems.map(phlogContentItem => {
            // if (this.props.loggedInStatus === 'LOGGED_IN') {
            //     return (
            //         <div key={phlogContentItem.id} className='admin-user-blog'>
            //             <PhlogContentItems phlogContentItem={phlogContentItem} />
            //             <a onClick={() => this.handleDeleteClick(phlogContentItem)}>
            //                 <FontAwesomeIcon icon='trash'/>
            //             </a>
            //         </div>
            //     );
            // } else { 
                return <PhlogContentItems key={phlogContentItem.id} phlogContentItem={phlogContentItem}/>;
            // }
        });

        return (
            <div className='phlog-container'>
                <PhlogModal
                    handleSuccessfulNewPhlogSubmission={this.handleSuccessfulNewPhlogSubmission}
                    handleModalClose={this.handleModalClose}
                    phlogModalIsOpen={this.state.phlogModalIsOpen}
                />

                {/* {this.props.loggedInStatus === 'LOGGED_IN' ? ( */}
                    <div className='new-phlog-link'>
                        <a onClick={this.handleNewPhlogClick}>
                            <FontAwesomeIcon icon='plus-circle'/>
                        </a>
                    </div>
                {/* ) : null} */}
                
                <div className='phlog-content-wrapper'>{phlogRecords}</div>

                {this.state.isLoading ? (
                    <div className='phlog-loader'>
                        <FontAwesomeIcon icon='spinner-third' spin />
                    </div>
                ) : null}
            </div>
        );
    }
}

// fetchPhlogImages = () => {
//         axios
//         .get('http://127.0.0.1:8000/phlogapi/phlog')
//         .then(response => {
//             this.setState({
//                 phlogsImages: response.data
//             });
//         })
//         .catch(error => {
//             console.log('fetchPhlogImagesError', error);
//         });
//     }

//     componentDidMount() {
//         this.fetchPhlogImages;
//     }
// }