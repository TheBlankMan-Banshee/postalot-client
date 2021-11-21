import React from "react";

function Metadata(){
    return(
        <div className = 'Metadata-container'>
            <h1>Image Metadata</h1>\
            <p>Edit the Metadata for your selected image by editing the fields below</p>
            <div className= "Metadata-btns">
                <button 
                    className="btns"
                    buttonStyle = 'btn--outline'
                    >
                    SAVE
                </button>
            </div>
        </div>
    );
}

export default Metadata;