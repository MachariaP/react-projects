import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects-section" data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">Technical <span>Projects</span></h1>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Here are some of my recent projects that demonstrate my skills in backend development and web design.</p>
      <div className="projects-grid">
        <article className="project-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/genblog.png" alt="GenBlog screenshot" className="screenshot" loading="lazy" />
          <h2>GenBlog</h2>
          <p>A dynamic blogging platform where users can share ideas, connect with others, and explore a responsive interface.</p>
          <ul>
            <li>Share Ideas</li>
            <li>Connect with Users</li>
            <li>Responsive Interface</li>
          </ul>
          <div className="technologies">
            <span>Flask</span>
            <span>Bootstrap</span>
            <span>CSS</span>
          </div>
          <a href="https://github.com/MachariaP/genblog.git" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> View on GitHub
          </a>
        </article>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default Projects;