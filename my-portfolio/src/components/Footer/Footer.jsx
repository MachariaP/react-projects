import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setMessage('Thank you for subscribing!');
      setIsError(false);
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Please enter a valid email.');
      setIsError(true);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    return () => AOS.refresh();
  }, []);

  return (
    <footer aria-label="Footer navigation and contact">
      <div className="footer-container">
        <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
          <h3>Phinehas Macharia</h3>
          <p>© 2025 All rights reserved.</p>
          <p>
            Contact:{' '}
            <a
              href="mailto:walburphinehas78@gmail.com"
              aria-label="Email Phinehas Macharia"
            >
              walburphinehas78@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-column" data-aos="fade-up" data-aos-delay="400">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column" data-aos="fade-up" data-aos-delay="600">
          <h3>Stay Updated</h3>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email for newsletter"
              required
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              Subscribe
            </button>
          </form>
          {message && (
            <p className={`form-message ${isError ? 'error' : 'success'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
      <div className="footer-social-links" data-aos="zoom-in" data-aos-delay="800">
        <a
          href="https://www.linkedin.com/in/phinehas-macharia-0b1b3b1b3/"
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/PhinehasMacharia"
          aria-label="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://twitter.com/PhinehasMachari"
          aria-label="Twitter Profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;