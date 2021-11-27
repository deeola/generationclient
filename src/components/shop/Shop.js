import React from "react";

const Shop = () => {
    return (
        <section>
      <div className="contact-upper">
        <h1>HAVE SOME QUESTIONS?</h1>
        <p>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us...
        </p>
      </div>
      <form className='contact-form-container'>
        <div className="form-control">
          <input type="email" placeholder="Your Email Address"></input>
        </div>
        <div className="form-control">
          <input type="text" placeholder="subject"></input>
        </div>
        <div className="form-control">
          <textarea name="textarea" rows="10" cols="50"></textarea>
        </div>
        <button type='submit' >Submit</button>
      </form>
    </section>
    )
}


export default Shop;