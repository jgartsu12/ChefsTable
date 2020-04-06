import React from 'react';

const PhlogImages = props => {
    if (!props.img) {
        return null;
    }

    return (
        <div className='phlog-images-wrapper'>
            <img src={props.img} />
        </div>
    );
};

export default PhlogImages;
