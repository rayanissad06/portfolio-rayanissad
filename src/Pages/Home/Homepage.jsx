import React from "react";

const Homepage = () => {
    return (
      <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jfif" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content"> 
          <p className="hero--section-description">
           Je suis un étudiant universitaire passionné avec une solide base en développement web. Compétent en HTML et CSS, j'ai perfectionné mes compétences pour créer des sites web réactifs et esthétiques. De plus, mon expertise en React me permet de développer des applications web dynamiques et interactives. Je suis passionné par l'apprentissage continu et l'élargissement de mes compétences pour créer des solutions innovantes dans le domaine du développement web.
          </p>
          
          
        </div>
      </div>
      <footer className="footer">
  <div className="footer--container">
    <div className="footer--links">
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="footer--link">GitHub</a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="footer--link">LinkedIn</a>
    </div>
   
  </div>
</footer>

    </section>
    )
}

export default Homepage;