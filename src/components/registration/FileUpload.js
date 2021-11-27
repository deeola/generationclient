import React, { Fragment, useState, useContext } from "react";
import Message from './Message';
import Progress from './Progress';
import axios from "axios";
import { Link } from "react-router-dom";
import ProfileContext from "../context/profile/profileContext";



function FileUpload() {

  const profileContext = useContext(ProfileContext);

  const {file, uploadedFile, message, onSubmit, onChange} = profileContext

  return (
    <section className='upload'>

    
    <Fragment>
      {message ? <Message className='messageError' msg={message} /> : null}
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
            
            <img style={{ width: '300px', height:'300px'}} src={  uploadedFile.filePath} alt='' />
         
            <h3 >{uploadedFile.fileName}</h3>
           
          </div>
         
          <Link className='create-profile-link' to='/create-profile'>Create Profile</Link>
       
        </div>
        
      ) : null}
    </Fragment>
    </section>
  );
}

export default FileUpload;
