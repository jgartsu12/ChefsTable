import React from 'react';
import PhlogDetails from './PhlogDetails';

const PhlogList = ({phlogs, deletePhlog}) => {
    return phlogs.length ? (
        <div className="phlog-list">
            <ul>
                {phlogs.map(phlog => {
                    return (
                        <PhlogDetails phlog={phlog} key={phlog.id} deletePhlog={deletePhlog}/>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">Add a phlog post!</div>
    )
}
 
export default PhlogList;