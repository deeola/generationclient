import React from "react";

const Advantages = () => {
  return (
    <section className="advantages">
      <h2>Unsere Vorteile</h2>
      <p className="advantages-subtext">
        The pain itself is fun, it's been easier to be assured, but it is
        running smoothly.
      </p>
      <div className="advantages-container">
        <div className="advantages-flex-top">
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-book"></i>
              <h4>In Erinnerung</h4>
            </div>

            <div className="flex-text-container">
              <p>Gemeinsame einzigartige Erlebnisse nicht mehr vergessen</p>
            </div>
          </div>
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-share-alt"></i>
              <h4>Share</h4>
            </div>
            <div className="flex-text-container">
              <p>Share meaningful photos, videos and texts with each other.</p>
            </div>
          </div>
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-globe"></i>
              <h4>Überall </h4>
            </div>
            <div  className="flex-text-container">
            <p>
              Deine Familie ist verstreut auf der Welt? Kein Problem Zugriff auf
              die Trauercloud Weltweit.
            </p>
            </div>

            
          </div>
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-map-pin"></i>
              <h4>An einem Ort</h4>
            </div>
            <div  className="flex-text-container">
            <p>Ein Ort um dich zu erinnern. - Jederzeit und überall.</p>
            </div>

            
          </div>
        </div>
        <div className="advantages-flex-bottom">
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-menorah"></i>
              <h4>Kerze anzünden</h4>
            </div>
            <div className="flex-text-container">
            <p>
              Zünde virtuell eine Kerze an und teile deine Trauer/Mitgefühl mit.
            </p>
            </div>

            
          </div>
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-sign-in-alt"></i>
              <h4>einfache Anmeldung</h4>
            </div>
            <div className="flex-text-container">
            <p>Einfacher Login durch Name und Geburtsdatum.</p>
            </div>
          </div>
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-user-shield"></i>
              <h4>Geschützt</h4>
            </div>
            <div className="flex-text-container">
            <p>Sicher und Datenschutzkonform</p>
            </div>

           
          </div>
          <div className="flex-top-container">
            <div className="fas-container">
              <i className="fas fa-life-ring"></i>
              <h4>Unterstützung</h4>
            </div>
            <div className="flex-text-container">
            <p>
              Wir begleiten und unterstützen dich in deiner besonderen
              Lebensphasen
            </p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
