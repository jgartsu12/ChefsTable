import React, { useState, useEffect } from "react";
import axios from 'axios'

import PhlogList from "./PhlogList";
import PhlogForm from "./PhlogForm";


const PhlogManager = () => {
  const [phlogs, setPhlogs] = useState([])

//   hooks
  useEffect(() => {
    axios.get('http://localhost:/api/v1/images')
      .then(res => {
        // console.log(res)
        setPhlogs(res.data)
      })
      .catch(err => {
        console.log(err, 'useEffect Hook  Phlog Manager error')
      })
  }, [])

  async function addPhlog(title, image) {
        
    const imageFormData = new FormData()
    imageFormData.append('file', image)
    imageFormData.append('upload_preset', 'jfw9oukn')
    
    try {
        const cloudinary = await axios(
            {
                method: "post",
                url: 'https://api.cloudinary.com/v1_1/chefstable/image/upload',
                data: imageFormData,
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        )
        console.log(cloudinary);
        const flask_database = await axios(
            {
                method: "post",
                url: 'https://phlog-api.herokuapp.com/api/v1/image',
                data: {
                    title: title,
                    // genre: genre,
                    // Either http or https
                    image_url: cloudinary.data.url,
                    // image_url: cloudinary.data.secure_url,
                    public_id: cloudinary.data.public_id
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        setPhlogs([...phlogs, flask_database.data])
        console.log(setPhlogs);
    } catch (err) {
      console.log(err, "addPhlog error")
    } 
  }

  const deletePhlog = (id) => {
    axios.delete(`https://phlog-api.herokuapp.com/api/v1/image/${id}`)
      .then(res => {
        console.log(res)
        setPhlogs(phlogs.filter(phlog => phlog.id !== id))
      })
      .catch(err => {
        console.log(err, "Delete phlog error")
      })
  };

  return (
    <div className="phlog-manager">
      <PhlogList phlogs={phlogs} deletePhlog={deletePhlog}/>
      <PhlogForm addPhlog={addPhlog}/>
    </div>
  );
}
 
export default PhlogManager;