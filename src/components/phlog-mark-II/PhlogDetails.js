import React from 'react';

const PhlogDetails = ({ phlog, deletePhlog }) => {
    return (
        <li onClick={() => deletePhlog(phlog.id)}>
            <div className="title">{phlog.title}</div>
            <img src={phlog.image_url} alt="phlog-image"/>
        </li>
    );
}
 
export default PhlogDetails;