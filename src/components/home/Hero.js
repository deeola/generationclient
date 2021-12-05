import React from "react";
import { NavLink } from "react-router-dom";

import SearchForm from "../registration/SearchForm";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1>All beautiful moments in one place.</h1>
        <p className='hero-subtexts'>
          The pain itself is a lot of pain, it has been sadipscing over the
          years, but it is time to envy the pain and the pain is exciting, it
          was exciting, but it was complicated. But they also subsidized both
          the terminal and the just two pains. Let the clita kasd gubergren
        </p>
        <div className="hero-links">
          <a className="more-info" href="/">
            Mehr Informationen
          </a>
          <NavLink className="create-page" to="/create-profile">
            Create page
          </NavLink>
        </div>
      </div>
      <SearchForm />
    </div>
  );
};

export default Hero;
