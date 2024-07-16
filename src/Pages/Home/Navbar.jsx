import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/home"
              onClick={closeMenu}
              className="navbar--content"
            >
              Page d'accueil
            </Link>
          </li>
          <li>
            <Link
              to="/project_1"
              onClick={closeMenu}
              className="navbar--content"
            >
              Projet un
            </Link>
          </li>
          <li>
            <Link
              to="/project_2"
              onClick={closeMenu}
              className="navbar--content"
            >
              Projet deux
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              onClick={closeMenu}
              className="navbar--content"
            >
              Témoignages
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="navbar--content"
            >
              Contactez-nous
            </Link>
          </li>

        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
