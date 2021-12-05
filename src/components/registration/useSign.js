// import axios from "axios";
import { useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";



const useSign = (callback, ValidateSign) => {
  const history = useNavigate();

  const authContext = useContext(AuthContext)
  const alertContext = useContext(AlertContext)


const {setAlert} = alertContext;
  const {register,myerror,clearErrors, isAuthenticated, handleSubmitSub} = authContext

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN UP
  const [values, setValue] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  //handle change event

  const handleChange = (e) => {

    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  //Set to local storage


  //On submit Event

  const users = values;


  useEffect(() => {

    if(isAuthenticated){
     history("/");
    }
    if(myerror === 'User already exists') {
      setAlert(myerror, 'danger')
      clearErrors()
    }

    // eslint-disable-next-line
  },[myerror, isAuthenticated, history])

  const onSubmit =  (e) => {
    setError(ValidateSign(values));
    // register(users)
   handleSubmitSub(users.email, users)
     
    e.preventDefault();
    
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      history("/");
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    handleChange,
    values,
    onSubmit,
    error,
    users,
    register
  };
};

export default useSign;
