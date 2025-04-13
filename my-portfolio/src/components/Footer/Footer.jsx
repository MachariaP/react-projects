import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2025 Phinehas Macharia. All rights reserved.</p>
      <p>Contact: <a href="mailto:walburphinehas78@gmail.com">walburphinehas78@gmail.com</a></p>
      <div className="social-media" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200">
        <a href="https://www.linkedin.com/in/phinehas-macharia-0b1b3b1b3/" className="social-link"><i className="fab fa-linkedin"></i></a>
        <a href="http://www.github.com/PhinehasMacharia" className="social-link"><i className="fab fa-github"></i></a>
        <a href="https://x.com/PhinehasMachari" className="social-link"><i className="fab fa-x-twitter"></i></a>
      </div>
    </footer>
  );
}

export default Footer;