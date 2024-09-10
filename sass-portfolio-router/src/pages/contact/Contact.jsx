import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-bgImg-container">
        {/* CONTACT NAV */}
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="index.html" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="about.html" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a href="projects.html" className="nav__link">
                My Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="contact.html" className="nav__link nav__link--active">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* CONTACT MAIN */}
        <main className="contact">
          <h2>Contact Me ...</h2>
          <div className="contact__list">
            <div className="contact__item">
              <i className="fas fa-envelope" /> Email
              <div className="text-secondary">
                wednesday@nevermoreacademy.edu
              </div>
            </div>
            <div className="contact__item">
              <i className="fas fa-mobile-alt" /> Phone
              <div className="text-secondary">+40 (571) 360-1234</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-map-marker-alt" /> Address
              <div className="text-secondary">
                Strada Zamorei 1, Bușteni 105500, Romania
              </div>
            </div>
          </div>
        </main>
        {/* CONTACT FOOTER */}
        <footer className="middle">
          <div className="social-icons">
           
          </div>
          <div className="copyright">© Copyright 2023</div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
