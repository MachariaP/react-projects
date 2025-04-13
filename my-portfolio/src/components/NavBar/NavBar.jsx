import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import './NavBar.css';

function NavBar() {
  const { theme, toggleTheme, bgColor, changeBackground } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isColorMenuOpen) setIsColorMenuOpen(false);
  };

  const toggleColorMenu = () => {
    setIsColorMenuOpen(!isColorMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1000">
          <span><Link to="/">Phinehas</Link></span>
        </div>
        <div className="links">
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"><Link to="/">Home</Link></div>
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><Link to="/about">About</Link></div>
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"><Link to="/skills">Skills</Link></div>
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"><Link to="/projects">Projects</Link></div>
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"><Link to="/blogs">Blogs</Link></div>
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"><Link to="/mpesa-payment">Mpesa-Payment</Link></div>
          <div className="link contact-btn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700"><Link to="/contact">Contact Me</Link></div>
        </div>
        <i className="fa-solid fa-bars hamburg" aria-label="Open menu" onClick={toggleMobileMenu}></i>
        <div className="mobile-controls">
          <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <div className="color-changer">
            <button className="color-btn" aria-label="Change background color" onClick={toggleColorMenu}>
              <i className="fas fa-palette"></i>
            </button>
            <div className={`color-menu ${isColorMenuOpen ? 'active' : ''}`} id="colorMenu">
              <span
                className={`color-option ${bgColor === 'default' ? 'active' : ''}`}
                data-color="default"
                style={{ background: 'linear-gradient(to right, #f8f9fc, #f1f3f9)' }}
                onClick={() => {
                  changeBackground('default');
                  setIsColorMenuOpen(false);
                }}
              ></span>
              <span
                className={`color-option ${bgColor === 'blue' ? 'active' : ''}`}
                data-color="blue"
                style={{ background: 'linear-gradient(to right, #f8f9fc, #8ed1fc)' }}
                onClick={() => {
                  changeBackground('blue');
                  setIsColorMenuOpen(false);
                }}
              ></span>
              <span
                className={`color-option ${bgColor === 'purple' ? 'active' : ''}`}
                data-color="purple"
                style={{ background: 'linear-gradient(to right, #f8f9fc, #d8b4fe)' }}
                onClick={() => {
                  changeBackground('purple');
                  setIsColorMenuOpen(false);
                }}
              ></span>
              <span
                className={`color-option ${bgColor === 'green' ? 'active' : ''}`}
                data-color="green"
                style={{ background: 'linear-gradient(to right, #f8f9fc, #7bdcb5)' }}
                onClick={() => {
                  changeBackground('green');
                  setIsColorMenuOpen(false);
                }}
              ></span>
              <span
                className={`color-option ${bgColor === 'orange' ? 'active' : ''}`}
                data-color="orange"
                style={{ background: 'linear-gradient(to right, #f8f9fc, #fed7aa)' }}
                onClick={() => {
                  changeBackground('orange');
                  setIsColorMenuOpen(false);
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="links">
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
          <Link to="/skills" onClick={toggleMobileMenu}>Skills</Link>
          <Link to="/projects" onClick={toggleMobileMenu}>Projects</Link>
          <Link to="/blogs" onClick={toggleMobileMenu}>Blogs</Link>
          <Link to="/mpesa-payment" onClick={toggleMobileMenu}>Mpesa-Payment</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact Me</Link>
          <i className="fa-solid fa-xmark cancel" aria-label="Close menu" onClick={toggleMobileMenu}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;