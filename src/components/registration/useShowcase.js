import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import ProfileContext from "../context/profile/profileContext";

const useShowcase = (callback, ValidateShowcase) => {
  const history = useNavigate();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const profileContext = useContext(ProfileContext);

  const { setAlert } = alertContext;
  const { myerror, clearErrors, isAuthenticated } = authContext;
  const { addProfile, uploadedFile, current, updateProfile } = profileContext;

  //GET UPLOADED FILE

  useEffect(() => {
    if (current !== null) {
      setSignValues(current);
    } else {
      setSignValues({
        firstname: "",
        lastname: "",
        dateOfBirth: "",
        dateofDeath: "",
        profileMessage: "",
        longMessage: "",
        imageLink: uploadedFile.filePath,
      });

      console.log(current);
    }

    //eslint-disable-next-line
  }, [profileContext, current]);

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [showcaseValues, setSignValues] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    dateofDeath: "",
    profileMessage: "",
    longMessage: "",
    imageLink: uploadedFile.filePath,
  });

  const handleChangeSign = (e) => {
    const { name, value } = e.target;

    setSignValues({
      ...showcaseValues,
      [name]: value,
    });

    console.log(name, value);
  };

  const showcase = showcaseValues;

  useEffect(() => {
    if (isAuthenticated) {
      history("/create-profile");
    }
    if (myerror === "Invalid Credentials") {
      setAlert(myerror, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [myerror, isAuthenticated, history]);

  //Register form and update form function

  const onSubmitForm = (e) => {
    setError(ValidateShowcase(showcaseValues));

    if (current === null) {
      addProfile(showcase);
    } else {
      updateProfile(showcase);
    }

    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      history("/showcase-all");
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    showcaseValues,
    onSubmitForm,
    handleChangeSign,
    error,
  };
};

export default useShowcase;
