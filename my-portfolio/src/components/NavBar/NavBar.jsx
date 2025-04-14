import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NavBar.css';

function NavBar() {
  const { theme, toggleTheme, bgColor, changeBackground } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isColorMenuOpen) setIsColorMenuOpen(false);
  };

  const toggleColorMenu = () => {
    setIsColorMenuOpen(!isColorMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsColorMenuOpen(false);
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/mpesa-payment', label: 'Mpesa-Payment' },
    { to: '/contact', label: 'Contact Me' },
  ];

  return (
    <nav aria-label="Main navigation">
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in">
          <span>
            <Link to="/" aria-label="Phinehas Macharia Portfolio Home">
              Phinehas
            </Link>
          </span>
        </div>
        <div className="links">
          {navLinks.map((link, index) => (
            <div
              className={`link ${location.pathname === link.to ? 'active' : ''}`}
              key={link.label}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <Link to={link.to} aria-current={location.pathname === link.to ? 'page' : undefined}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <button
          className="hamburg"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
        <div className="mobile-controls">
          <button
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            onClick={toggleTheme}
          >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <div className="color-changer">
            <button
              className="color-btn"
              aria-label="Open background color options"
              onClick={toggleColorMenu}
            >
              <i className="fas fa-palette"></i>
            </button>
            <div className={`color-menu ${isColorMenuOpen ? 'active' : ''}`} role="menu">
              {[
                { color: 'default', gradient: 'linear-gradient(to right, #f8f9fc, #f1f3f9)' },
                { color: 'blue', gradient: 'linear-gradient(to right, #f8f9fc, #8ed1fc)' },
                { color: 'purple', gradient: 'linear-gradient(to right, #f8f9fc, #d8b4fe)' },
                { color: 'green', gradient: 'linear-gradient(to right, #f8f9fc, #7bdcb5)' },
                { color: 'orange', gradient: 'linear-gradient(to right, #f8f9fc, #fed7aa)' },
              ].map((option) => (
                <span
                  key={option.color}
                  className={`color-option ${bgColor === option.color ? 'active' : ''}`}
                  data-color={option.color}
                  style={{ background: option.gradient }}
                  onClick={() => {
                    changeBackground(option.color);
                    setIsColorMenuOpen(false);
                  }}
                  role="menuitem"
                  aria-label={`Set ${option.color} background`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown ${isMobileMenuOpen ? 'active' : ''}`} role="menu">
        <div className="links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={toggleMobileMenu}
              className={location.pathname === link.to ? 'active' : ''}
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;