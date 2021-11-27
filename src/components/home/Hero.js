import React from "react";
import heroimage from "../../assets/heroimage.jpg";

const Hero = () => {

    //HeroImage
  const mystyle = {
    
    backgroundImage: `url(${heroimage})`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottomRightRadius: '50%',
    backgroundRepeat: 'no-repeat'


  };

  return (
    <section className="hero-container" style={mystyle}>
      <div  className='hero-text-container'>
        <h1>All beautiful moments in one place</h1>
        <p>
          The pain itself is a lot of pain, it has been sadipscing over the
          years, but it is time to envy the pain and the pain is exciting, it
          was exciting, but it was complicated. But they also subsidized both
          the terminal and the just two pains. Let the clita kasd gubergren
        </p>
        <div className='hero-links'>
          <a className='more-info' href="/">Mehr Informationen</a>
          <a className='create-page' href="/">Create page</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
