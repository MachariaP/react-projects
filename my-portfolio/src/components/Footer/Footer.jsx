import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2025 Phinehas Macharia. All rights reserved.</p>
      <p>Contact: <a href="mailto:walburphinehas78@gmail.com">walburphinehas78@gmail.com</a></p>
      <div className="footer-social-links" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200">
        <a
          href="https://www.linkedin.com/in/phinehas-macharia-0b1b3b1b3/"
          className="footer-social-link"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="http://www.github.com/PhinehasMacharia"
          className="footer-social-link"
          aria-label="GitHub Profile"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://twitter.com/PhinehasMachari"
          className="footer-social-link"
          aria-label="Twitter Profile"
          title="Twitter"
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