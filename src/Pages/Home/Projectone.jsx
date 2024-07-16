import React from "react";

const Projectone = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Blog website</span>
        </h1>
        <p className="hero--section-description">
        J'ai conçu et développé un site web de blog de voyage captivant qui retranscrit l'excitation de découvrir de nouvelles destinations. Le site présente une interface moderne et interactive, réalisée avec HTML, CSS et React.
        </p>
      </div>
      <button 
      className="btn btn-primary" 
      onClick={() => window.location.href = 'https://github.com/rayanissad06'}
    >
      Visitez le site
      </button>
    </div>
    <div className="hero--section--img">
      <img src="./img/Lifeleck.jpg" alt="Hero Section" />
    </div>
  </section>
  );
};

export default Projectone;
