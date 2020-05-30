import React, { useState } from 'react';
// use hook useState

const PhlogForm = ({addPhlog}) => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [fileInputKey, setFileInputKey] = useState(Date.now())

    const handleSubmit = (e) => {
        e.preventDefault()
        addPhlog(title, image)
        setTitle('')
        setImage('')
        setFileInputKey(Date.now())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Phlog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <div className="file-submit-wrapper">
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    key={fileInputKey}
                />
                <input type="submit" value="Add Phlog"/>
            </div>
        </form>
    );
}
 
export default PhlogForm;