import React from 'react'

const Home = () => {
  return (
    <div><div className="home-bgImg-container">
    {/* HOME NAV */}
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="index.html" className="nav__link nav__link--active">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="about.html" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="projects.html" className="nav__link">
            My Project
          </a>
        </li>
        <li className="nav__item">
          <a href="contact.html" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    {/* HOME MAIN */}
    <main className="home">
      <h2>Hi! My Name Is</h2>
      <h1 className="home__name">
        Wednesday <span className="home__name--last">Addams</span>
      </h1>
      <h2>Full Stack Web Developer</h2>
    </main>
    {/* HOME FOOTER */}
    <footer className="horizontal">
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-instagram fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
      <div className="copyright">© Copyright 2023</div>
    </footer>
  </div>
  </div>
  )
}

export default Home