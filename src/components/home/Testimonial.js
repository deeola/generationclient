import React from "react";
import testimonialimage from "../../assets/testimonials.jpg";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className='testimonial-container'>
      <div className="testimonial-image">
        <img src={testimonialimage} alt="testimonialImage"></img>
      </div>
      <div className="testimonialText">
        <i className="fas fa-quote-left"></i>
        <p className="testimonial-title">A lot of pain, is a lot</p>
        <p className="testimonial-para">
          The pain itself is a lot of pain, it has been sadipscing over the
          years, but it is time to envy the pain and the pain is exciting, it
          was exciting, but it was complicated. But they also subsidized both
          the terminal and the just two pains. Let the clita kasd gubergren, no
          sea takimata be holy The pain itself is love, it is established
        </p>
        <p className="testimonialName">
          -<span>Elena Fabring</span>
        </p>
     
      </div>
      </div>
      
    </section>
  );
};

export default Testimonial;
