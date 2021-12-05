import React, { Fragment, useState, useContext } from "react";
import Message from './Message';
import { Link } from "react-router-dom";
import ProfileContext from "../context/profile/profileContext";



function FileUpload() {

  const profileContext = useContext(ProfileContext);

  const {file, uploadedFile, message, onSubmit, onChange} = profileContext

  return (
    <section className='upload'>

    
   
   
      <form onSubmit={onSubmit} >
        <div >
          <input
            type='file'
            id='customFile'
            onChange={onChange}
            className='fileInput'

          />
    
        </div>
        <input
          type='submit'
          value='Upload'
          className='upload-button'
         
        />
      </form>
      {uploadedFile ? (
        <div className='uploadedFile-container' >
          <div className='picture-and-name-container' >
            
            <img  src={  uploadedFile.filePath} alt='' />
         
            <h3 >{uploadedFile.fileName}</h3>
           
          </div>
         
          <Link className='create-profile-link' to='/create-profile'>NEXT</Link>
       
        </div>
        
      ) : null}
   
    </section>
  );
}

export default FileUpload;
