import React, { useReducer, useState } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from "../types";


// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';


const AuthState = (props) => {
  // Navigation

  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    myerror: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  

  ///load user

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/auth");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  //register user

  const register = async (FormData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/users", FormData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //login user
  const login = async (FormData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/auth", FormData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //logout user
  const logout = () =>
    dispatch({
      type: LOGOUT,
    });

  //clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERROR });

  //SUB



  const [subscribed, setSubscribed] = useState(false)

  const stripe = useStripe();
  const elements = useElements();

  
  const handleSubmitSub = async (myMail, formDatas) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: myMail,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      const res = await axios.post('/sub', {'payment_method': result.paymentMethod.id, 'email': myMail});
      // eslint-disable-next-line camelcase
      const {client_secret, status} = res.data;

      if (status === 'requires_action') {
        stripe.confirmCardPayment(client_secret).then(function(result) {
          if (result.error) {
            console.log('There was an issue!');
            
            console.log(result.error);
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc)
            
            console.log('You got the money!');
            // Show a success message to your customer
            
          }
        });
      } else {
        register(formDatas)
        setSubscribed(true)
        
      }
    }
  };

  //RETURN
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        myerror: state.myerror,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
        handleSubmitSub,
        subscribed
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
