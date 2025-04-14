import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

function Projects() {
  const [popupProject, setPopupProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null); // Initialize AOS for animations

  useEffect(() => {
    AOS.init({ once: true, offset: 100 });
  }, []); // Project data with added fields

  const projects = [
    {
      id: "genblog",
      title: "GenBlog",
      img: "/images/genblog.png",
      alt: "GenBlog screenshot",
      desc: "A dynamic blogging platform where users can share ideas, connect with others, and explore a responsive interface.",
      features: ["Share Ideas", "Connect with Users", "Responsive Interface"],
      tech: ["Flask", "Bootstrap", "CSS"],
      github: "https://github.com/MachariaP/genblog.git",
      demo: null,
      challenges: "Optimized for high traffic with scalable backend.",
      outcomes: "Increased user engagement by 30%.",
      isFeatured: true,
    },
    {
      id: "studybud",
      title: "StudyBud",
      img: "/images/studybud.png",
      alt: "StudyBud screenshot",
      desc: "A collaborative learning platform with rooms for topic-focused discussions and search functionality.",
      features: ["Topic-Focused Rooms", "Search & Explore"],
      tech: ["Flask", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/MachariaP/StudyBud.git",
      demo: null,
      challenges: "Implemented real-time chat without WebSockets.",
      outcomes: "Supported 500+ concurrent users.",
      isFeatured: false,
    },
    {
      id: "airbnb-clone",
      title: "AirBnB Clone",
      img: "/images/airbnb-clone.png",
      alt: "AirBnB Clone screenshot",
      desc: "An ALX project with a custom command interpreter for managing database objects and JSON serialization.",
      features: ["Command Interpreter", "Data Persistence"],
      tech: ["Python", "Flask", "JSON"],
      github: "https://github.com/MachariaP/AirBnB_clone.git",
      demo: null,
      challenges: "Designed a lightweight ORM alternative.",
      outcomes: "Reduced data retrieval time by 20%.",
      isFeatured: false,
    },
    {
      id: "simple-shell",
      title: "Simple Shell",
      img: "/images/shell.png",
      alt: "Simple Shell screenshot",
      desc: "A custom Unix Shell with built-in commands, file redirection, and robust error handling.",
      features: ["Command Execution", "File Redirection", "Error Handling"],
      tech: ["Python"],
      github: "https://github.com/MachariaP/simple_shell.git",
      demo: null,
      challenges: "Handled complex piping scenarios.",
      outcomes: "Achieved 99% command compatibility.",
      isFeatured: true,
    },
    {
      id: "string-search-server",
      title: "String Search Server",
      img: "/images/string-search-server.png",
      alt: "String Search Server screenshot",
      desc: "A high-performance TCP server for exact string matching in large text files, optimized for speed and scalability.",
      features: ["O(1) Lookups", "LRU Caching", "SSL Support"],
      tech: ["Python", "TCP/IP", "SSL"],
      github: "https://github.com/MachariaP/algorithmic_S.git",
      demo: null,
      challenges: "Optimized for low-latency responses.",
      outcomes: "Processed 10,000 queries/sec.",
      isFeatured: false,
    },
  ]; // Unique technologies for filtering

  const technologies = ["All", ...new Set(projects.flatMap((p) => p.tech))]; // Filter and search projects

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = filter === "All" || p.tech.includes(filter);
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.features.some((f) =>
        f.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  }); // Popup handlers

  const openPopup = (project) => {
    setPopupProject(project);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closePopup = () => {
    setPopupProject(null);
    document.body.style.overflow = "auto";
  }; // Share project

  const shareProject = (project) => {
    const shareData = {
      title: project.title,
      text: project.desc,
      url: project.github,
    };
    if (navigator.share) {
      navigator
        .share(shareData)
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Copy this link to share: " + project.github);
    }
  }; // Focus search input on key press

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="projects-section"
      role="region"
      aria-label="Projects Showcase"
    >
           {" "}
      <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                Technical <span>Projects</span>     {" "}
      </h1>
           {" "}
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                Explore my recent projects showcasing skills in backend
        development and web design.      {" "}
      </p>
           {" "}
      <div className="search-filter" data-aos="fade-up" data-aos-delay="600">
               {" "}
        <input
          type="text"
          placeholder="Search projects (Press / to focus)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={searchInputRef}
          aria-label="Search projects by title or description"
          className="search-input"
        />
               {" "}
        <div className="filter-buttons">
                   {" "}
          {technologies.map((tech) => (
            <button
              key={tech}
              className={filter === tech ? "active" : ""}
              onClick={() => setFilter(tech)}
              aria-label={`Filter by ${tech}`}
              aria-pressed={filter === tech}
            >
                            {tech}           {" "}
            </button>
          ))}
                 {" "}
        </div>
             {" "}
      </div>
           {" "}
      <div className="projects-grid">
               {" "}
        {filteredProjects.length === 0 ? (
          <p className="no-results" data-aos="fade-up">
            No projects match your search.
          </p>
        ) : (
          filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${project.isFeatured ? "featured" : ""}`}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={100 + index * 100}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
                           {" "}
              {project.isFeatured && (
                <span className="featured-tag">Featured</span>
              )}
                           {" "}
              <img
                src={project.img}
                alt={project.alt}
                className="screenshot"
                loading="lazy"
                decoding="async"
                onClick={() => openPopup(project)}
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && openPopup(project)}
              />
                           {" "}
              <h2 id={`project-title-${project.id}`}>{project.title}</h2>       
                    <p>{project.desc}</p>             {" "}
              <ul aria-label="Project features">
                               {" "}
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
                             {" "}
              </ul>
                           {" "}
              <div className="technologies" aria-label="Technologies used">
                               {" "}
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
                             {" "}
              </div>
                           {" "}
              <div className="project-links">
                               {" "}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                                    <i className="fab fa-github"></i> GitHub    
                             {" "}
                </a>
                               {" "}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                    aria-label={`View live demo of ${project.title}`}
                  >
                                       {" "}
                    <i className="fas fa-external-link-alt"></i> Demo          
                           {" "}
                  </a>
                )}
                               {" "}
                <button
                  className="share-btn"
                  onClick={() => shareProject(project)}
                  aria-label={`Share ${project.title}`}
                >
                                    <i className="fas fa-share-alt"></i> Share  
                               {" "}
                </button>
                             {" "}
              </div>
                         {" "}
            </article>
          ))
        )}
             {" "}
      </div>
           {" "}
      <div className="cta-section" data-aos="fade-up" data-aos-delay="800">
                <p>Interested in working together?</p>       {" "}
        <a href="/contact" className="cta-btn" aria-label="Contact me">
                    Get in Touch        {" "}
        </a>
             {" "}
      </div>
           {" "}
      {popupProject && (
        <>
                   {" "}
          <div
            className="overlay"
            onClick={closePopup}
            aria-hidden="true"
            tabIndex="-1"
          ></div>
                   {" "}
          <div
            className="project-modal"
            role="dialog"
            aria-labelledby={`modal-title-${popupProject.id}`}
            aria-modal="true"
          >
                       {" "}
            <button
              className="close-btn"
              onClick={closePopup}
              aria-label="Close project modal"
            >
                            ×            {" "}
            </button>
                       {" "}
            <div className="modal-content">
                           {" "}
              <img
                src={popupProject.img}
                alt={popupProject.alt}
                className="modal-img"
              />
                           {" "}
              <h2 id={`modal-title-${popupProject.id}`}>
                {popupProject.title}
              </h2>
                            <p>{popupProject.desc}</p>             {" "}
              <h3>Features</h3>             {" "}
              <ul>
                               {" "}
                {popupProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
                             {" "}
              </ul>
                            <h3>Technologies</h3>             {" "}
              <div className="technologies">
                               {" "}
                {popupProject.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
                             {" "}
              </div>
                            <h3>Challenges</h3>             {" "}
              <p>{popupProject.challenges}</p>              <h3>Outcomes</h3>   
                        <p>{popupProject.outcomes}</p>             {" "}
              <div className="modal-links">
                               {" "}
                <a
                  href={popupProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                                    <i className="fab fa-github"></i> View on
                  GitHub                {" "}
                </a>
                               {" "}
                {popupProject.demo && (
                  <a
                    href={popupProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                                       {" "}
                    <i className="fas fa-external-link-alt"></i> Live Demo      
                               {" "}
                  </a>
                )}
                             {" "}
              </div>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </>
      )}
         {" "}
    </section>
  );
}

export default Projects;
