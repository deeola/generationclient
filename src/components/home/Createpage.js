import React from "react";
import { NavLink } from "react-router-dom";

const CreatePage = () => {
  return (
    <section className="createpage">
      <h3 className="createpage-header">All beautiful moments in one place</h3>
      <p className="createpage-subtext">
        The pain itself is fun, it's been easier to be safe over the years, but
        it's still time.
      </p>
      <div className="createpage-container">
        <div className="createpageleft">
          <h3>Now create a new page</h3>
          <p className="pageleftcontainer">
            The pain itself is fun, it's been easier to be assured, but it is
            running smoothly
          </p>
          <div className="create-advantages">
            <div className="advan-container">
              <p className="your-advantages">Your advantages</p>
              <div className="advan-line"></div>
            </div>
            <div className="advantages-text-container">
              <div className="advantages-left">
                <div className="advantages-details">
                  <i className="fas fa-check-circle"></i>
                  <p>Einfacher Upload</p>
                </div>
                <div className="advantages-details">
                  <i className="fas fa-check-circle"></i>
                  <p>Texte, Bilder und Videos</p>
                </div>
                <div className="advantages-details">
                  <i className="fas fa-check-circle"></i>
                  <p>Alles an einem Ort</p>
                </div>
              </div>

              <div className="advantages-right">
                <div className="advantages-details">
                  <i className="fas fa-check-circle"></i>
                  <p>Bezahlung über PayPal</p>
                </div>
                <div className="advantages-details">
                  <i className="fas fa-check-circle"></i>
                  <p>Für Mensch und Tier</p>
                </div>
                <div className="advantages-details">
                  <i className="fas fa-check-circle"></i>
                  <p>Datenschutzkonform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="createpageright">
          <p className='page-price-text'>Einen Monat kostenlos, danach</p>
          <p className='page-price'>€7,99</p>
          <NavLink className='seite-price' to='/register'>Seite erstellen </NavLink>
        
        </div>
      </div>
    </section>
  );
};

export default CreatePage;

