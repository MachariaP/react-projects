import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import './NavBar.css';

function NavBar() {
  const { toggleTheme, changeBackground } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            <i className="fas fa-moon"></i>
          </button>
          <div className="color-changer">
            <button className="color-btn" aria-label="Change background color" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="fas fa-palette"></i>
            </button>
            <div className="color-menu" id="colorMenu">
              <span className="color-option" data-color="default" style={{ background: 'linear-gradient(to right, #FFFFFF, #FFF3E0)' }} onClick={() => changeBackground('default')}></span>
              <span className="color-option" data-color="blue" style={{ background: 'linear-gradient(to right, #FFFFFF, #D6E8F8)' }} onClick={() => changeBackground('blue')}></span>
              <span className="color-option" data-color="purple" style={{ background: 'linear-gradient(to right, #FFFFFF, #E6DDF5)' }} onClick={() => changeBackground('purple')}></span>
              <span className="color-option" data-color="green" style={{ background: 'linear-gradient(to right, #FFFFFF, #E0F0E2)' }} onClick={() => changeBackground('green')}></span>
              <span className="color-option" data-color="orange" style={{ background: 'linear-gradient(to right, #FFFFFF, #FFE8CC)' }} onClick={() => changeBackground('orange')}></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/mpesa-payment">Mpesa-Payment</Link>
          <Link to="/contact">Contact Me</Link>
          <i className="fa-solid fa-xmark cancel" aria-label="Close menu" onClick={toggleMobileMenu}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;