import React from "react";
import backgroundvideo from "../../assets/video.mp4";

const Ready = () => {
  return (
    <section className="ready">
      <div className="videocontainer">
        <video className="video" src={backgroundvideo} autoPlay muted loop />
      </div>

      <div className="readyText">
        <h4>Bereit loszulegen?</h4>
        <p className="ready-para">
          But the pain in the film is irure to condemn, in pleasure it wants to
          escape from the pain of being cillum in pain, no result.
        </p>
        <div className="download-register">
          <a href="/">Download the app</a>
          <p>oder</p>
          <a href="/">Register Now</a>
        </div>
      </div>
    </section>
  );
};

export default Ready;
