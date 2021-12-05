import React from "react";
import image_two from "../../assets/about2.jpeg";
import Navbar from "../shared/Navbar";

const About = () => {
  return (
    <div className="container-nav">
      {/* <Navbar /> */}
      <section className="about">
        <div className="about-upper">
          <h1>ABOUT US</h1>
          <p className="aboutText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="about-image-container">
          <div>
            <img src={image_two} alt="about1"></img>
            <p className="aboutName">Myname Firstbame</p>
            <p className="aboutPosition">C.E.O</p>
          </div>
          <div>
            <img src={image_two} alt="about1"></img>
            <p className="aboutName">Name Three</p>
            <p className="aboutPosition">Position Two</p>
          </div>
          <div>
            <img src={image_two} alt="about1"></img>
            <p className="aboutName">Name Three</p>
            <p className="aboutPosition">Position Three</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
