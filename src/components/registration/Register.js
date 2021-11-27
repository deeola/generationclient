import React, { useState } from "react";
import useSign from "./useSign";
import ValidateSign from "./ValidateSign";
import background from "../../assets/loginbackground.jpeg";
import { Link } from "react-router-dom";

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
    <section className="login registration" style={mystyle}>
      <div className="login-container register">
        <h1>Register</h1>

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
          <button type="submit">Register</button>
        </form>
        <div className="forgot-register">
          <p>Already has an account? </p>
          <Link className='login-register' to="/login">Login</Link>
          
        </div>
      </div>
    </section>
  );
};

export default Register;
