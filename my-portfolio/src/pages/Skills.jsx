import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Skills.css';

function Skills() {
  const [filter, setFilter] = useState('all'); // State for filtering skills

  useEffect(() => {
    AOS.init({ offset: 100, once: true }); // Run animations once
  }, []);

  const skillsData = [
    {
      category: 'backend',
      title: 'Backend Development',
      description: 'Developed and deployed scalable backend systems, RESTful APIs, and microservices using Python (Django, Flask).',
      points: ['API Development & Documentation', 'Authentication (Basic & Session-based)'],
      technologies: ['Python', 'Django', 'Flask'],
      aos: 'slide-up',
      delay: 100,
    },
    {
      category: 'database',
      title: 'Database Management',
      description: 'Proficient in managing relational and NoSQL databases for optimal performance and data handling.',
      points: ['Relational Databases (MySQL, PostgreSQL)', 'NoSQL Databases (MongoDB, Redis)'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      aos: 'slide-up',
      delay: 200,
    },
    {
      category: 'algorithms',
      title: 'Algorithms & Data Structures',
      description: 'Designed and optimized data structures for efficient data manipulation and processing.',
      points: ['Linked Lists & Trees', 'Stacks/Queues & Sorting'],
      technologies: ['Algorithms', 'Data Structures'],
      aos: 'slide-up',
      delay: 300,
    },
    {
      category: 'devops',
      title: 'Systems Engineering & DevOps',
      description: 'Expert in configuring and managing Linux systems, servers, and network security.',
      points: ['Linux Systems & Servers', 'Networking & Monitoring'],
      technologies: ['Linux', 'Nginx', 'Gunicorn', 'Puppet'],
      aos: 'slide-up',
      delay: 400,
    },
    {
      category: 'web',
      title: 'Web Development',
      description: 'Strong in frontend technologies for creating responsive user interfaces and deploying applications.',
      points: ['Frontend (HTML, CSS, JS)', 'Templating & Deployment'],
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Jinja2'],
      aos: 'slide-up',
      delay: 500,
    },
    {
      category: 'data',
      title: 'Data Handling & Storage',
      description: 'Advanced skills in managing and optimizing data storage for high-performance systems.',
      points: ['SQL & NoSQL', 'Caching & Pagination'],
      technologies: ['SQL', 'MongoDB', 'Redis'],
      aos: 'slide-up',
      delay: 600,
    },
  ];

  // Filter skills based on category
  const filteredSkills = filter === 'all' ? skillsData : skillsData.filter(skill => skill.category === filter);

  return (
    <section className="skills-section" data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
        My Technical <span>Expertise</span>
      </h1>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
        Explore my core skills, showcasing my ability to deliver high-quality solutions across various technical domains.
      </p>
      <div className="skills-filter">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'backend' ? 'active' : ''}
          onClick={() => setFilter('backend')}
        >
          Backend
        </button>
        <button
          className={filter === 'database' ? 'active' : ''}
          onClick={() => setFilter('database')}
        >
          Database
        </button>
        <button
          className={filter === 'algorithms' ? 'active' : ''}
          onClick={() => setFilter('algorithms')}
        >
          Algorithms
        </button>
        <button
          className={filter === 'devops' ? 'active' : ''}
          onClick={() => setFilter('devops')}
        >
          DevOps
        </button>
        <button
          className={filter === 'web' ? 'active' : ''}
          onClick={() => setFilter('web')}
        >
          Web
        </button>
        <button
          className={filter === 'data' ? 'active' : ''}
          onClick={() => setFilter('data')}
        >
          Data
        </button>
      </div>
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <article
            key={index}
            className="skill-card"
            data-aos={skill.aos}
            data-aos-duration="1000"
            data-aos-delay={skill.delay}
          >
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <ul>
              {skill.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="technologies">
              {skill.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {/* Placeholder for icons; replace with Font Awesome or SVGs */}
                  <i className={`fab fa-${tech.toLowerCase()}`} aria-hidden="true"></i>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;