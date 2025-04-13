import React, { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ThemeContext } from '../ThemeContext';
import '../styles/Home.css';

const SocialLink = ({ href, icon, label, title }) => (
  <a
    href={href}
    className="home-social-link"
    aria-label={label}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={`fa-brands fa-${icon}`}></i>
  </a>
);

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="home-section">
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
      </button>
      <div className="main-container">
        <div className="image" data-aos="zoom-in-right" data-aos-delay="200">
          <div className="image-wrapper">
            <img src="/images/profile.jpg" alt="Phinehas Macharia" loading="lazy" />
          </div>
        </div>
        <div className="content" data-aos="fade-up" data-aos-delay="400">
          <div className="content-card">
            <h1 data-aos="slide-right" data-aos-delay="600">
              Hey, I'm <span>Phinehas Macharia</span>
            </h1>
            <div className="typewriter" data-aos="slide-left" data-aos-delay="800">
              I'm a{' '}
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000, 'Problem Solver', 2000, 'Innovator', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p data-aos="flip-up" data-aos-delay="1000">
              Results-driven Backend Developer with over 3 years of experience building scalable, high-performance solutions using Python. Skilled in crafting responsive, user-focused web interfaces with HTML, CSS, and modern frameworks. Certified by ALX, I’ve delivered 5+ projects, optimizing systems for efficiency and solving complex challenges. Ready to drive innovation in collaborative environments.
            </p>
            <div className="home-social-links" data-aos="zoom-in" data-aos-delay="1200">
              <SocialLink
                href="https://www.linkedin.com/in/phinehas-macharia-0b1b3b1b3/"
                icon="linkedin"
                label="LinkedIn Profile"
                title="LinkedIn"
              />
              <SocialLink
                href="http://www.github.com/PhinehasMacharia"
                icon="github"
                label="GitHub Profile"
                title="GitHub"
              />
              <SocialLink
                href="https://twitter.com/PhinehasMachari"
                icon="x-twitter"
                label="Twitter Profile"
                title="Twitter"
              />
            </div>
            <div className="cta-buttons" data-aos="zoom-in-up" data-aos-delay="1400">
              <a href="/curriculum-vitae.pdf" download className="btn download-cv">
                Download CV
              </a>
              <a href="mailto:walburphinehas78@gmail.com" className="btn hire-me">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;