import "../../styles/Upload.scss"
import React, { useState } from 'react'

function Upload() {
    let [imagePreviewURL,setImgURL] = useState('');
    let [picture,setPicture] = useState('');
    
    const uploadImage = () => {
          const data = new FormData()
          data.append("file", picture)
          data.append("upload_preset", "kaozqusa")
          data.append("cloud_name","postalot")
          fetch("https://api.cloudinary.com/v1_1/postalot/image/upload",{
          method:"post",
          body: data  
        })
        .then(resp => resp.json())
        .then(data => {
            setImgURL(data.url)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <input type="file" onChange= {(e)=> setPicture(e.target.files[0])}></input>
                <button onClick={uploadImage}>Upload</button>
            </div>
            <div className='upload'>
                <h1>Uploaded image will be displayed here</h1>
                <img src={imagePreviewURL} className='img' />
            </div>
        </div>
    )
}

export default Upload;