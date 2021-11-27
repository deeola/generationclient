import React from "react";
import background from "../../assets/loginbackground.jpeg";

const Forgot = () => {
  const mystyle = {
    backgroundImage: `url(${background})`,
    width: "100%",
    height: "65vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="login" style={mystyle}>
      <div className="forgot-container">
        <p>A recovery link has been sent to your email</p>
        <form>
          <div className="form-control">
            <input placeholder="please enter your email" type="email"></input>
          </div>
          <button className='recover-button' type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default Forgot;
