import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaReact,
} from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

function About() {
  const [downloadCount, setDownloadCount] = useState(0);

  // Initialize AOS and mock download counter
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    // Mock CV download counter (in real app, fetch from API)
    const mockDownloads = Math.floor(Math.random() * 50) + 10;
    setDownloadCount(mockDownloads);

    // Cleanup AOS
    return () => AOS.refresh();
  }, []);

  // Handle CV download (mock increment)
  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1);
  };

  // Skills array with proficiency levels (0-100)
  const skills = [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'HTML', icon: <FaHtml5 />, level: 85 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 70 }, // Added React
    { name: 'Databases', icon: <FaDatabase />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Linux', icon: <FaLinux />, level: 70 },
    { name: 'REST APIs', icon: <AiOutlineApi />, level: 80 },
    { name: 'Django', icon: <SiDjango />, level: 85 },
  ];

  return (
    <div className="about-page">
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-content">
          <img
            src="/images/profile.jpg"
            alt="Phinehas Macharia, Backend Developer"
            className="profile-photo"
            data-aos="zoom-in"
            data-aos-delay="200"
            loading="lazy"
          />
          <h1 data-aos="fade-left" data-aos-delay="400">
            <span className="about-text">About</span>{' '}
            <span>Phinehas Macharia</span>
          </h1>
          <p className="tagline" data-aos="fade-right" data-aos-delay="600">
            Backend Developer | React Enthusiast | Problem Solver
          </p>
          <div className="cta-container" data-aos="zoom-in" data-aos-delay="800">
            <a
              href="/curriculum-vitae.pdf"
              download
              className="cta-button"
              onClick={handleDownload}
              aria-label="Download Phinehas Macharia's CV"
            >
              Download CV
            </a>
            <span className="download-count">
              Downloaded {downloadCount} times
            </span>
          </div>
        </div>
      </section>

      <section className="bio-section" data-aos="flip-up">
        <h2 data-aos="zoom-in">My Journey</h2>
        <div className="bio-container">
          <div className="bio-image" data-aos="fade-right" data-aos-delay="200">
            <img
              src="/images/journey-photo.jpg"
              alt="Phinehas Macharia's coding journey"
              className="journey-photo"
              loading="lazy"
            />
          </div>
          <div className="bio-text" data-aos="fade-left" data-aos-delay="400">
            <p>
              I’m Phinehas Macharia, a dedicated Backend Developer with over 3
              years of experience, certified by ALX. I specialize in building
              scalable, high-performance solutions using Python, Django, and REST
              APIs, while also crafting dynamic, user-centric interfaces with
              React, HTML, and CSS.
            </p>
            <p>
              With 5+ successful projects, I thrive on turning complex challenges
              into elegant solutions. My passion for technology drives me to
              explore emerging trends, contribute to open-source, and share
              insights through my blog. Let’s build something impactful together!
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section" data-aos="fade-up">
        <h1 data-aos="zoom-in">
          My <span>Skills</span>
        </h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 100}
              title={`${skill.name}: ${skill.level}% proficiency`}
            >
              {skill.icon}
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;