import React, { useState } from "react";
import background from "../../assets/loginbackground.jpeg";
import useForm from "./useForm";
import Validate from "./Validate";

import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Login = () => {
  const mystyle = {
    backgroundImage: `url(${background})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // const { Submitform } = GenerationContext;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const Submitforms = () => {
    setIsSubmitted(true);
  };

  const { signValues, handleChangeSign, onSubmitSignin, error } = useForm(
    Submitforms,
    Validate
  );

  const { email, password } = signValues;
  return (
    <div className='container-nav'>
   
      <section className="login" style={mystyle}>
        <div className="login-container">
          <h1>Login</h1>
          <p className="login-subtext"> Sign in to manage your grief page</p>
          <form onSubmit={onSubmitSignin} noValidate>
            <div className="form-control">
              <input
                placeholder="E-mail"
                type="email"
                onChange={handleChangeSign}
                id="email"
                name="email"
                value={email}
              ></input>
              {error.email && <p className="error">{error.email}</p>}
            </div>
            <div className="form-control">
              <input
                onChange={handleChangeSign}
                type="password"
                placeholder="password"
                id="password"
                name="password"
                value={password}
              ></input>
              {error.password && <p className="error">{error.password}</p>}
            </div>

            <button type="submit">Fortfahren</button>
          </form>
          <div className="forgot-register">
            <Link className="password-forgot" to="/forgot-password">
              Passwort Vergessen?
            </Link>
            <Link className="signup" to="/register">
              Konto Erstellen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
