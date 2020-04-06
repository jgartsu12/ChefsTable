import React from 'react';
import { Link } from 'react-router-dom'
import striptags from "striptags";
import Truncate from "react-truncate";

const PhlogContentItems = props => {
    const {
        id,
        phlog_status,
        phlog_description,
        phlog_title,
        phlog_image_url
    } = props.phlogContentItems;

    return (
        <div className='phlog-content-items'>
            <div className='phlog-content-items__header'>
                <Link to={`/phlog/${id}`}>
                    <h1>{phlog_title}</h1>
                </Link>
            </div>
            <div className='phlog-content-items__body'>
                <Truncate
                    lines={5}
                    ellipsis={
                        <span>
                            ...<Link to={`/phlog/${id}`}>Read more about photo</Link>
                        </span>
                    }
                >
                    {striptags(phlog_description)}
                </Truncate>
            </div>
        </div>
    );
}

export default PhlogContentItems;