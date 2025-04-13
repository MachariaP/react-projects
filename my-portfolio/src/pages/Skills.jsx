import React from 'react';
import '../styles/Skills.css'; // Import your CSS file for styling

function Skills() {
  return (
    <section className="skills-section" data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">My Technical <span>Expertise</span></h1>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Here are my core skills and areas of expertise, showcasing my ability to deliver high-quality solutions in backend development and related fields.</p>
      <div className="skills-grid">
        <article className="skill-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <h2>Backend Development</h2>
          <p>Developed and deployed scalable backend systems, RESTful APIs, and microservices using Python (Django, Flask).</p>
          <ul>
            <li>API Development & Documentation</li>
            <li>Authentication (Basic & Session-based)</li>
          </ul>
          <div className="technologies">
            <span>Python</span>
            <span>Django</span>
            <span>Flask</span>
          </div>
        </article>
        {/* Add more skill cards as needed */}
      </div>
    </section>
  );
}

export default Skills;