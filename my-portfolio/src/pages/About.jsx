import React from 'react';
import '../styles/About.css';
import { FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaLinux } from 'react-icons/fa'; // Font Awesome for common icons
import { SiDjango } from 'react-icons/si'; // Simple Icons for Django
import { AiOutlineApi } from 'react-icons/ai'; // Ant Design Icons for REST APIs

function About() {
  return (
    <>
      <section className="hero-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="hero-content">
          <img src="/images/profile.jpg" alt="Phinehas Macharia" className="profile-photo" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" loading="lazy" />
          <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" title="About Phinehas Macharia">
            <span className="about-text">About</span> <span>Phinehas Macharia</span>
          </h1>
          <p className="tagline" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Backend Developer | Web Designer | Problem Solver</p>
          <a href="/curriculum-vitae.pdf" download className="cta-button" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Download CV</a>
        </div>
      </section>

      <section className="bio-section" data-aos="flip-up" data-aos-duration="1000">
        <h2>My Journey</h2>
        <div className="bio-container">
          <div className="bio-image">
            <img src="/images/journey-photo.jpg" alt="My Journey" className="journey-photo" loading="lazy" />
          </div>
          <div className="bio-text">
            <p>I’m Phinehas Macharia, a results-driven Backend Developer with over 3 years of experience, certified by ALX. I excel at building scalable, high-performance solutions with Python and crafting responsive, user-centric web interfaces using HTML, CSS, and modern frameworks. My tech journey is fueled by a passion for solving complex challenges and delivering projects that make a difference.</p>
            <p>With 5+ successful projects under my belt, I’m adept at transforming concepts into efficient, impactful applications. Beyond coding, I stay ahead of the curve by diving into emerging tech trends and sharing knowledge through insightful blog posts.</p>
          </div>
        </div>
      </section>

      <section className="skills-section" data-aos="fade-up" data-aos-duration="1000">
        <h1>My <span>Skills</span></h1>
        <div className="skills-grid">
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <FaPython />
            <h3>Python</h3>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <FaHtml5 />
            <h3>HTML</h3>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
            <FaCss3Alt />
            <h3>CSS</h3>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
            <FaDatabase />
            <h3>Databases</h3>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
            <FaGitAlt />
            <h3>Git</h3>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
            <FaLinux />
            <h3>Linux</h3>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
            <AiOutlineApi />
            <h3>REST APIs</h3>
          </div>
          <div className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
            <SiDjango />
            <h3>Django</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;