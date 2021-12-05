import React, { useState } from "react";
import Navbar from "../shared/Navbar";

const Forgot = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="container-nav">
   
      <section>
        <div className="forgot-container">
          {status ? (
            <p>A recovery link has been sent to your email</p>
          ) : (
            <p>Please enter your email to reset your password</p>
          )}

          <form>
            <div className="form-control">
              <input placeholder="email" type="email"></input>
            </div>
            <button className="recover-button" type="submit">
              RECOVER PASSWORD
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Forgot;
