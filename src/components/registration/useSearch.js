import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import ProfileContext from "../context/profile/profileContext";

const useSearch = (callback, Validate) => {
  const history = useNavigate();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const profileContext = useContext(ProfileContext);

  const { setAlert } = alertContext;
  const { login, myerror, clearErrors, isAuthenticated } = authContext;
  const {
    filterProfiles,
    clearFilter,
    filtered,
    loading,
    getAllProfiles,
    AllProfiles,
  } = profileContext;

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [searchValues, setSignValues] = useState({
    name: "",
    date: "",
  });

  const handleChangeSearch = (e) => {
    const { name, value } = e.target;
    setSignValues({
      ...searchValues,
      [name]: value,
    });
  };

  const users = searchValues;

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //      history("/");
  //     }
  //     if (myerror === "Invalid Credentials") {
  //       setAlert(myerror, "danger");
  //       clearErrors();
  //     }

  //     // eslint-disable-next-line
  //   }, [myerror, isAuthenticated, history]);

  //Search

  //   useEffect(() => {
  //     if (filtered === null) {
  //       users.name = "";
  //       users.date = "";
  //     }
  //     getAllProfiles();
  //   },[]);

  const onSubmitSearch = (e) => {
    setError(Validate(searchValues));
    filterProfiles(users);
    console.log(users);
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      history("/filtered");
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    searchValues,
    onSubmitSearch,
    handleChangeSearch,
    error,
  };
};

export default useSearch;
