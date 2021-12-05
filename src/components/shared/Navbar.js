import React, { useContext, useEffect, useState } from "react";
import mobilelogo from "../../assets/logos/mobilelogo.png";
import desktoplogo from "../../assets/logos/desktoplogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import ProfileContext from "../context/profile/profileContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const history = useNavigate();

  const { getProfiles } = profileContext;

  useEffect(() => {
    getProfiles();

    //eslint-disable-next-line
  }, []);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
    history("/");

  };

  
  //NAV FUNCTIONS
  //HAMBURGER STATE
  const [hamOpen, setHamOpen] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const ulDisplay = () => {
    return hamOpen ? {} : { display: "none" };
  };

  //DISPLAY CLOSE ICON
  const DisplayCloseIcon = () => {
    return closeIcon ? { display: "block" } : { display: "none" };
  };

  //DISPLAY OPEN ICON
  const DisplayOpenIcon = () => {
    return openIcon ? { display: "none" } : { display: "block" };
  };

  //MENU STYLE
  const displayMenu = () => {
    setHamOpen(true);
    setCloseIcon(true);
    setOpenIcon(true);
  };

  const closeMenu = () => {
    setHamOpen(false);
    setCloseIcon(false);
    setOpenIcon(false);
  };

  const authLinks = (
    <ul className="authLinks">
      <li className="helloUsername">
        Hello, <span className="username">{user && user.username}</span>{" "}
      </li>
      <li onClick={closeMenu}>
        <NavLink className="show-profile-link" to="/userprofile">
          My Profil
        </NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink className="show-profile-link" to="/showcase-all">
          Show Profiles
        </NavLink>
      </li>
      <li onClick={closeMenu}>
        <p className="logout-link" onClick={onLogout} >
          Logout
        </p>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="guestlinks">
      <li onClick={closeMenu}>
        <NavLink className="logins" to="/Login">
          Login
        </NavLink>
      </li>
      <li onClick={closeMenu}>
        <NavLink className="register " to="/Register">
          Register
        </NavLink>
      </li>
    </ul>
  );


  return (
    <nav className="navbar">
      <div className="logos-container" onClick={closeMenu}>
       
        <div className="desktoplogo">
          <img src={desktoplogo} alt="logo"></img>
        </div>
        <div className="mobilelogo">
          <img src={mobilelogo} alt="mobilelogo"></img>
        </div>
      </div>
      <p className="logoText">GenerationsGeschenk</p>
      <div className="nav-links"  style={ulDisplay()}>
        <ul className="constantLinks">
          <li onClick={closeMenu}>
            <NavLink className="myLink" to="/">
              Home
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink className="myLink" to="/about">
              About Us
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink className="myLink" to="/shop">
              Shop
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink className="myLink" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
      <div className="hamburgers-container">
        <i
          className="fas fa-bars"
          style={DisplayOpenIcon()}
          onClick={() => {
            displayMenu();
          }}
        ></i>
        <i className="fas fa-times"
         style={DisplayCloseIcon()}
         onClick={() => {
           closeMenu();
         }}></i>
      </div>
    </nav>
  );
};

export default Navbar;
