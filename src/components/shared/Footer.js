import React from "react";
import logo from "../../assets/logo.svg";

const Footer = () => {
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

        <form className="newsletter">
          <div className="form-control">
            <input placeholder="Für Newsletter anmelden"></input>
            <button>Abschicken</button>
          </div>
        </form>
      </div>
      <div className="footerRight">
       
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
      

        <ul>
          <li>
            <a href=".">Impressum</a>
          </li>
          <li>
            <a href=".">Data Protection</a>
          </li>
          <li>
            <a href=".">AGB's</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=".">Login</a>
          </li>
          <li>
            <a href=".">Register</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
