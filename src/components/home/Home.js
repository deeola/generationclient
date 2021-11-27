import React,{useContext, useEffect} from "react";
import Advantages from "./Advantages";
import CreatePage from "./Createpage";
import Getstarted from "./Getstarted";
import Hero from "./Hero";
import Ready from "./Ready";
import Showcase from "./Showcase";
import Testimonial from "./Testimonial";
import AuthContext from "../context/auth/authContext";
import ProfileFilter from "../shared/ProfileFilter";

const Home = () => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser()

    // eslint-disable-next-line
  },[])
  return (
    <div>
      <ProfileFilter />
      <Hero />
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
