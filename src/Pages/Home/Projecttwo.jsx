import React from "react";

const Projecttwo = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">site web de gestion</span>
        </h1>
        <p className="hero--section-description">
        J'ai conçu et développé un site web de gestion de tâches innovant qui facilite l'organisation et la productivité. Le site propose une interface moderne et intuitive, créée avec HTML, CSS et React.
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
      <img src="./img/getsion.png" alt="project Section" />
    </div>

  </section>
  );
};

export default Projecttwo;
