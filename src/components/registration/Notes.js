import React, { useContext, useState, useEffect } from "react";
import useNote from "./useNote";
import ValidateNote from "./ValidateNote";
import { Link } from "react-router-dom";
import ProfileContext from "../context/profile/profileContext";

const Notes = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const Submitforms = () => {
    setIsSubmitted(true);
  };

  //get ALL profiles
  const profileContext = useContext(ProfileContext);
  const { getAllProfiles } = profileContext;

  const { noteValues, handleChangeSign, onSubmitNote, error } = useNote(
    Submitforms,
    ValidateNote
  );

  useEffect(() => {
    getAllProfiles();

    //eslint-disable-next-line
  }, []);

  const { message, author } = noteValues;
  return (
    <section className='addNotes'>
      <div className='note-container'>
        <div className='note-upper'>
          <p>Do you have a memory you would love to share?</p>
        </div>
        <div className='note-lower'>
          <form onSubmit={onSubmitNote} noValidate>
            <div className="form-control">
              <textarea
                placeholder="message"
                type="text"
                onChange={handleChangeSign}
                id="message"
                name="message"
                value={message}
                rows="10" cols="50"
              ></textarea>
              {error.message && <p className="error">{error.message}</p>}
            </div>
            <div className="form-control">
              <input
                onChange={handleChangeSign}
                type="text"
                placeholder="author"
                id="author"
                name="author"
                value={author}
              ></input>
            </div>

            <button type="submit">ADD NOTE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Notes;
