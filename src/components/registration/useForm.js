import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";

const useForm = (callback, Validate) => {
  const history = useNavigate();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, myerror, clearErrors, isAuthenticated } = authContext;

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [signValues, setSignValues] = useState({
    email: "",
    password: "",
  });

  const handleChangeSign = (e) => {
    const { name, value } = e.target;
    setSignValues({
      ...signValues,
      [name]: value,
    });
  };

  const users = signValues;


  
  useEffect(() => {
    if (isAuthenticated) {
     history("/userprofile");
    }
    if (myerror === "Invalid Credentials") {
      setAlert(myerror, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [myerror, isAuthenticated, history]);

  //Login

  const onSubmitSignin = (e) => {
    setError(Validate(signValues));
    login(users);
    e.preventDefault();
    
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      // history("/");
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    signValues,
    onSubmitSignin,
    handleChangeSign,
    error,
  };
};

export default useForm;
