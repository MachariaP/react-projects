import React from 'react';
import '../styles/Home.css'; // Import your index.css for styles

function Home() {
  return (
    <section>
      <div className="main-container">
        <div className="image" data-aos="zoom-in-right" data-aos-duration="2500">
          <img src="/images/profile.jpg" alt="Phinehas Macharia" loading="lazy" />
        </div>
        <div className="content">
          <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
            Hey I'm <span>Phinehas Macharia</span>
          </h1>
          <div className="typewriter" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">
            I'm a <span></span>
          </div>
          <p data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1000">
            Results-driven Backend Developer with over 3 years of experience building scalable, high-performance solutions using Python. Skilled in crafting responsive, user-focused web interfaces with HTML, CSS, and modern frameworks. Certified by ALX, I’ve successfully delivered 5+ projects, optimizing systems for efficiency and solving complex challenges. Ready to drive innovation and exceed expectations in dynamic, collaborative environments.
          </p>
          <div className="social-links" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1200">
            <a href="[invalid url, do not cite]"><i className="fa-brands fa-github"></i></a>
            <a href="[invalid url, do not cite]"><i className="fa-brands fa-linkedin"></i></a>
            <a href="[invalid url, do not cite]"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <a href="/curriculum-vitae.pdf" download className="btn" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="1300">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;