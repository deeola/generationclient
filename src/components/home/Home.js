import React, { useContext, useEffect } from "react";
import Advantages from "./Advantages";
import CreatePage from "./Createpage";
import Getstarted from "./Getstarted";
import Hero from "./Hero";
import Ready from "./Ready";
import Showcase from "./Showcase";
import Testimonial from "./Testimonial";
import AuthContext from "../context/auth/authContext";
import Navbar from "../shared/Navbar";
import mobileHero2 from '../../assets/mobileHero2.jpeg'


const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();

    // eslint-disable-next-line
  }, []);

  //HeroImage
  const mystyle = {
    backgroundImage: `url(${mobileHero2})`,
  };
  return (
    <div className="container">
      <header style={mystyle}>
      
        <Hero />
      </header>
      <Showcase />
      <Advantages />
      <Testimonial />
      <Getstarted />
      <CreatePage />
      <Ready />
    </div>
  );
};

export default Home;
