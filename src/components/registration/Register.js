import React, { useState } from "react";
import useSign from "./useSign";
import ValidateSign from "./ValidateSign";
import background from "../../assets/loginbackground.jpeg";
import { NavLink } from "react-router-dom";
import Navbar from "../shared/Navbar";
import HomePayment from "../payment/HomePayment";

const Register = () => {
  const [signuptrue, setSignuptrue] = useState(false);

  function SubmitSignUp() {
    setSignuptrue(true);
  }

  const { values, handleChange, onSubmit, error } = useSign(
    SubmitSignUp,
    ValidateSign
  );

  const { username, email, password2, password } = values;

  const mystyle = {
    backgroundImage: `url(${background})`,
    width: "100%",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="container-nav">
      <section className="login registration" style={mystyle}>
        <div className="login-container register register-flex">
          <div className="register-left">
            <h2>Alle schone momente an einem ort</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>Video abspielen</button>
          </div>
          <div className='register-right'>
          <form className="register-form" onSubmit={onSubmit}>
            <div className="form-control">
              <input
                onChange={handleChange}
                placeholder="username"
                name="username"
                type="text"
                id="username"
                value={username}
              ></input>
              {error.username && <p className="error">{error.username}</p>}
            </div>
            <div className="form-control">
              <input
                onChange={handleChange}
                placeholder="email"
                name="email"
                type="email"
                id="email"
                value={email}
              ></input>
              {error.email && <p className="error">{error.email}</p>}
            </div>
            <div className="form-control">
              <input
                onChange={handleChange}
                placeholder="password"
                name="password"
                type="password"
                id="password"
                value={password}
              ></input>
              {error.password && <p className="error">{error.password}</p>}
            </div>
            <div className="form-control">
              <input
                onChange={handleChange}
                placeholder="confirm password"
                name="password2"
                type="password"
                id="password2"
                value={password2}
              ></input>
              {error.password2 && <p className="error">{error.password2}</p>}
            </div>
            <HomePayment />
            <button type="submit">Register</button>
          </form>

          <div className="forgot-register">
            <p>Already has an account? </p>
            <NavLink className="login-register" to="/login">
              Login
            </NavLink>
          </div>
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default Register;
