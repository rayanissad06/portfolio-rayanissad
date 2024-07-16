import React, { useState } from "react";

const Testimonialpage = () => {
  const [review, setReview] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission (par exemple, envoyer les données de l'avis au backend)
    console.log("Avis soumis :", review);
    // Effacer les champs du formulaire après soumission
    setReview({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const staticTestimonials = [
    {
      description: "Service incroyable, je recommande vivement !",
      src: "./img/testione.png",
    },
    {
      description: "Une expérience merveilleuse du début à la fin.",
      src: "./img/testitwo.png",
    },
    {
      description: "Service client excellent et produits de qualité !",
      src: "./img/testithree.png",
    },
  ];

  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Avis des Clients</p>
          <h2 className="sections--heading">Témoignages Clients</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {staticTestimonials.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                    fill="#FFFF00"
                  />
                </svg>
              ))}
            </div>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
            </div>
          </div>
        ))}
      </div>
      <div className="submit--review--section">
        <h3>Soumettez votre avis</h3>
        <form onSubmit={handleSubmit} className="submit--review--form">
          <label htmlFor="firstName">
            Prénom :
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={review.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lastName">
            Nom de famille :
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={review.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email :
            <input
              type="email"
              id="email"
              name="email"
              value={review.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="message">
            Votre avis :
            <textarea
              id="message"
              name="message"
              rows="4"
              value={review.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Poster</button>
        </form>
      </div>
    </section>
  );
};

export default Testimonialpage;
