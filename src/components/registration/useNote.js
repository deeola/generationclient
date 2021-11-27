import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import ProfileContext from "../context/profile/profileContext";
import ValidateNote from "./ValidateNote";


const useNote = (callback, Validate) => {
  const history = useNavigate();

  //useparams

  const { id } = useParams();

  const profileContext = useContext(ProfileContext);


  const {  addNotes } = profileContext;

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [noteValues, setNoteValues] = useState({
    message: "",
    author: "",
  });

  const handleChangeSign = (e) => {
    const { name, value } = e.target;
    setNoteValues({
      ...noteValues,
      [name]: value,
    });
  };

  const notes = noteValues;

 

  const onSubmitNote = (e) => {
    setError(ValidateNote(noteValues));
 
      addNotes(notes, id);
      

    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
        history(`/search/${id}`);
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    noteValues,
    onSubmitNote,
    handleChangeSign,
    error,
  };
};

export default useNote;
