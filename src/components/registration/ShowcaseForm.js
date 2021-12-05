import React, { useState, useContext, useEffect } from "react";
import useShowcase from "./useShowcase";
import ValidateShowcase from "./ValidateShowcase";
import ProfileContext from "../context/profile/profileContext";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload";
import showcaseimage from '../../assets/showcaseimage.jpeg'


function ShowcaseForm() {

  const profileContext = useContext(ProfileContext);

  const { current,clearCurrent } = profileContext;

  console.log(current)


  const clearAll = () => {
    clearCurrent()
  }


  const [isSubmitted, setIsSubmitted] = useState(false);
  const Submitforms = () => {
    setIsSubmitted(true);
  };

  

  const { showcaseValues, handleChangeSign, onSubmitForm, error } = useShowcase(
    Submitforms,
    ValidateShowcase
  );

  const {
    firstname,
    lastname,
    dateOfBirth,
    dateofDeath,
    longMessage,
    profileMessage,
  
  } = showcaseValues;

  const mystyle = {
    
    backgroundImage: `url(${showcaseimage})`,
    width: '100%',
    padding : '50px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottomRightRadius: '50%',
    backgroundRepeat: 'no-repeat',
    color : 'white'


  };


  
  return (
    <section className='showcaseForm'>
      <div className='showcaseForm-Upper' style={mystyle}>
        <p>{current === null ? 'Hi, Welcome' : 'Update Contact' }</p>
        <p>{current   === null  ? 'Kindly Fill this form to create a customized page for your loved one.': 'Kindly fill here to update your profile'}</p>

      </div>
      <form onSubmit={onSubmitForm} noValidate>
        
        <div className='form-container'>
        <div className="form-control">
          <input
            placeholder="first name"
            type="text"
            onChange={handleChangeSign}
            id="firstname"
            name="firstname"
            value={firstname}
          ></input>
          {error.firstname && <p className="error">{error.firstname}</p>}
        </div>
        <div className="form-control">
          <input
            placeholder="last name"
            type="text"
            onChange={handleChangeSign}
            id="lastname"
            name="lastname"
            value={lastname}
          ></input>
          {error.lastname && <p className="error">{error.lastname}</p>}
        </div>
        <div className="form-control">
          <input
            placeholder="Date of Birth"
            type="date"
            onChange={handleChangeSign}
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
          ></input>
          {error.dateOfBirth && <p className="error">{error.dateOfBirth}</p>}
        </div>
        <div className="form-control">
          <input
            placeholder="Date of Death"
            type="date"
            onChange={handleChangeSign}
            id="dateofDeath"
            name="dateofDeath"
            value={dateofDeath}
          ></input>
          {error.dateofDeath && <p className="error">{error.dateofDeath}</p>}
        </div>
        <div className="form-control">
          <textarea
            placeholder="Profile Message"
            type="text"
            onChange={handleChangeSign}
            id="profileMessage"
            name="profileMessage"
            value={profileMessage}
            rows="10" cols="10"
          ></textarea>
          {error.profileMessage && (
            <p className="error">{error.profileMessage}</p>
          )}
        </div>
        <div className="form-control">
          <textarea
            placeholder="Long Message"
            type="text"
            onChange={handleChangeSign}
            id="longMessage"
            name="longMessage"
            value={longMessage}
            rows="10" cols="50"
          ></textarea>
          {error.longMessage && <p className="error">{error.longMessage}</p>}
        </div>
        </div>
        <button className='submit-btn' type="submit">{current  === null ?'CREATE PROFILE' : 'UPDATE PROFILE'}</button>
      </form>
    </section>
  );
}

export default ShowcaseForm;
