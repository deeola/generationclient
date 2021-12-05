import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import axios from "axios";

const useSubscribe = (callback, ValidateSubscribe) => {
  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [subscribeValues, setSignValues] = useState({
    email: "",
  });

  const handleChangeSubscribe = (e) => {
    const { name, value } = e.target;
    setSignValues({
      ...subscribeValues,
      [name]: value,
    });
  };

  const sub = subscribeValues;

  //Subscribe

  const onSubmitSubscribe = async (e) => {
    setError(ValidateSubscribe(subscribeValues));
    // login(sub);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/subscribe", sub, config);

      console.log(res.data);
    } catch (err) {
      console.log(error);
    }
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
    subscribeValues,
    onSubmitSubscribe,
    handleChangeSubscribe,
    error,
  };
};

export default useSubscribe;
