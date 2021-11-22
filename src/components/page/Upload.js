import "../../styles/Upload.scss"
import React, { useState } from 'react'

function Upload() {
    let [imagePreviewURL,setImgURL] = useState('');
    let [picture,setPicture] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle uploading-', picture);
    }

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

    let $imagePreview = null;
    if (imagePreviewURL) {
      $imagePreview = (<img src={imagePreviewURL} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <div className="previewComponent">
          <form onSubmit={(e)=> handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=> setPicture(e.target.files[0])} />
            <button className="submitButton" 
              type="submit" 
              onClick={uploadImage}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
}

export default Upload;