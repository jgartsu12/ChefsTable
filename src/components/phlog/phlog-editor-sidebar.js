import React from "react";

const PhlogEditorSidebarList = props => {
    const phlogList = props.data.map(phlogItems => {
        // debugger;
        return (
            <div key={phlogItems.id} className='phlog-item-img'>
                <div className='phlog-items_display-to-site-Admin'>
                    <img 
                        className='phlog-items__photos'
                        src={phlogItems.phlog_image_url}
                    />
                </div>

                <div className='actions'>
                    <a
                        className='action-icon'
                        onClick={() => props.handleEditClick(phlogItems)}
                    >
                        <i className="fas fa-edit"></i>
                    </a>

                    <a 
                        className='action-icon'
                        onClick={() => props.handleDeleteClick(phlogItems)}
                    >
                        <i className="fas fa-dumpster"></i>
                    </a>
                </div>
            </div>
        );
    });

    return <div className='phlog-editor-sidebar-wrapper'>{phlogList}</div>
};

export default PhlogEditorSidebarList;
