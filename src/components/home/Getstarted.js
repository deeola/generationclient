import React from "react";
import { NavLink } from "react-router-dom";

const Getstarted = () => {
  return (
    <section className="getstarted">
      <div className="getStarted-left">
        <h3>In drei einfachen Schritten anfangen</h3>
        <p>
          The pain itself is a lot of pain, it's been easier to be sure it's
          been easier, but it is time to get the pain and the pain is exciting
          per month
        </p>
        <NavLink className='getstarted-link-desktop' to='/register'>GET STARTED</NavLink>
    
      </div>
      <div className="getStarted-right">
        <div className="getstarted-instruct">
          <p className="instruct-number">1</p>
          <div className="instruct-container">
            <h5>Regestrieren</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </p>
          </div>
        </div>
        <div className="getstarted-instruct">
          <p className="instruct-number">2</p>
          <div className="instruct-container">
            <h5>Texte, Bilder und Videos hochladen</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </p>
          </div>
        </div>
        <div className="getstarted-instruct">
          <p className="instruct-number">3</p>
          <div className="instruct-container">
            <h5>Trauern</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
      <NavLink className='getstarted-link-mobile' to='/register'>GET STARTED</NavLink>
    </section>
  );
};

export default Getstarted;
