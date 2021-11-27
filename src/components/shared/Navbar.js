import React, { Fragment, useContext, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import ProfileContext from "../context/profile/profileContext";
import ProfileFilter from "./ProfileFilter";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const { profiles, getProfiles } = profileContext;

  useEffect(() => {
    getProfiles();

    //eslint-disable-next-line
  }, []);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <div className='authLinks' >
      <li className='helloUsername'>Hello, <span>{user && user.username}</span> </li>
      
        <li>
          <NavLink className="register" to="/upload">
            Create Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="register" to="/showcase-all">
            Show Profiles
          </NavLink>
        </li>
  
      <li>
        <a onClick={onLogout} href="#!">
          <span className="register">Logout</span>
        </a>
      </li>
    </div>
  );

  const guestLinks = (
    <Fragment>
      <NavLink className="register" to="/Login">
        Login
      </NavLink>
      <NavLink className="register" to="/Register">
        Register
      </NavLink>
    </Fragment>
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <ul>
        <li>
          <NavLink className="myLink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className="myLink" to="/contact">
            Contact Us
          </NavLink>
        </li>
        {/* <li>
          <NavLink className="myLink" to="/showcase">
            Showcase
          </NavLink>
        </li> */}
      
      </ul>
      

      {isAuthenticated ? authLinks : guestLinks}

      <div className="hamburger">
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>
    </nav>
  );
};

export default Navbar;
