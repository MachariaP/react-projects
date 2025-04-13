import React from 'react';
import '../styles/Blogs.css'; // Import your CSS file for styling

function Blogs() {
  return (
    <section className="blogs-section" data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">Technical <span>Insights</span></h1>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Explore my thoughts and expertise on software engineering, system design, and cutting-edge technologies as a Senior Software Engineer.</p>
      <div className="blogs-grid">
        <article className="blog-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/scaling-backend.png" alt="Scaling Backend Systems" className="blog-image" loading="lazy" />
          <h2>Scaling Backend Systems for Millions</h2>
          <p className="date">March 5, 2025</p>
          <p>A deep dive into designing scalable RESTful APIs with Flask, load balancing with Nginx, and caching strategies using Redis to handle millions of requests.</p>
          <div className="tags">
            <span>Backend</span>
            <span>Scalability</span>
            <span>Redis</span>
          </div>
          <a href="#read-more-1" className="read-more">Read More</a>
        </article>
        {/* Add more blog cards as needed */}
      </div>
    </section>
  );
}

export default Blogs;