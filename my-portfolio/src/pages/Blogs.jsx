import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Blogs.css';

function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Blog data from HTML, plus a React post
  const blogs = [
    {
      id: 1,
      title: 'Scaling Backend Systems for Millions',
      image: '/images/scaling-backend.png',
      alt: 'Scaling Backend Systems',
      date: 'March 5, 2025',
      excerpt:
        'A deep dive into designing scalable RESTful APIs with Flask, load balancing with Nginx, and caching strategies using Redis to handle millions of requests.',
      tags: ['Backend', 'Scalability', 'Redis'],
      link: '#read-more-1',
    },
    {
      id: 2,
      title: 'Microservices: From Monolith to Modular',
      image: '/images/microservices.png',
      alt: 'Microservices Architecture',
      date: 'February 20, 2025',
      excerpt:
        'How I refactored a monolithic Django app into microservices, leveraging Docker and Kubernetes for deployment, with real-world performance metrics.',
      tags: ['Microservices', 'Django', 'DevOps'],
      link: '#read-more-2',
    },
    {
      id: 3,
      title: 'Optimizing Databases for High Throughput',
      image: '/images/optimizing-databases.png',
      alt: 'Optimizing Databases',
      date: 'January 15, 2025',
      excerpt:
        'Techniques for indexing PostgreSQL tables, sharding data, and integrating MongoDB for hybrid workloads, based on a real project with 10x performance gains.',
      tags: ['Databases', 'PostgreSQL', 'MongoDB'],
      link: '#read-more-3',
    },
    {
      id: 4,
      title: 'System Design Principles for Senior Engineers',
      image: '/images/system-design.png',
      alt: 'System Design Principles',
      date: 'December 10, 2024',
      excerpt:
        'A guide to designing fault-tolerant systems, with examples from my AirBnB Clone project, focusing on CAP theorem and distributed caching.',
      tags: ['System Design', 'Distributed Systems', 'Python'],
      link: '#read-more-4',
    },
    {
      id: 5,
      title: 'Building Dynamic UIs with React',
      image: '/images/react-ui.png',
      alt: 'React User Interfaces',
      date: 'April 10, 2025',
      excerpt:
        'Exploring React hooks, state management with Redux, and component optimization to build responsive, scalable frontends, with examples from my portfolio.',
      tags: ['React', 'Frontend', 'JavaScript'],
      link: '#read-more-5',
    },
  ];

  // Unique categories
  const categories = [
    'All',
    ...new Set(blogs.flatMap((blog) => blog.tags)),
  ];

  // Filter blogs
  const filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategory === 'All' || blog.tags.includes(selectedCategory)) &&
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    return () => AOS.refresh();
  }, []);

  return (
    <div className="blogs-page">
      <main>
        <section className="blogs-section" data-aos="fade-up">
          <h1 data-aos="zoom-in" data-aos-delay="200">
            Technical <span>Insights</span>
          </h1>
          <p data-aos="fade-right" data-aos-delay="400">
            Explore my thoughts and expertise on software engineering, system
            design, and cutting-edge technologies, including React, as a Senior
            Software Engineer.
          </p>
          <div className="blogs-controls" data-aos="fade-up" data-aos-delay="600">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
              aria-label="Search blog posts"
            />
            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="blogs-grid">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <article
                  className="blog-card"
                  key={blog.id}
                  data-aos="zoom-in"
                  data-aos-delay={100 + (blog.id % 4) * 100}
                >
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    className="blog-image"
                    loading="lazy"
                  />
                  <h2>{blog.title}</h2>
                  <p className="date">{blog.date}</p>
                  <p>{blog.excerpt}</p>
                  <div className="tags">
                    {blog.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={blog.link} className="read-more">
                    Read More
                  </a>
                </article>
              ))
            ) : (
              <p className="no-results" data-aos="fade-up">
                No blogs match your search or filter.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Blogs;