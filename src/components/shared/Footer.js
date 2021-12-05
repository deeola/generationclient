import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import axios from "axios";
import useSubscribe from '../registration/useSubscribe'
import ValidateSubscribe from "../registration/ValidateSubscribe";

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const SubmitSubscribe = () => {
    setIsSubmitted(true);
  };

  const { subscribeValues, handleChangeSubscribe, onSubmitSubscribe, error } = useSubscribe(
    SubmitSubscribe,
    ValidateSubscribe
  );

  const { email } = subscribeValues;
  return (
    <footer>
      <div className="footerLeft">
        <div className="footerlogo">
          <img src={logo} alt="logo"></img>
        </div>
        <p className="footerText">
          But the pain in the film is irure to condemn, in pleasure it wants to
          escape from the pain of being cillum in pain, no result.
        </p>

        <form className="newsletter" onSubmit={onSubmitSubscribe}>
          <div className="form-control">
            <input
              placeholder="E-mail"
              type="email"
              onChange={handleChangeSubscribe}
              id="email"
              name="email"
              value={email}
            ></input>
            <button type="submit">SUBSCRIBE</button>
          </div>
        </form>
      </div>
      <div className="footerRight">
        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Impressum
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="navlink">
              Data Protection
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="navlink">
              AGB's
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/login" className="navlink">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="navlink">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
