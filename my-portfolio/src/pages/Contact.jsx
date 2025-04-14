import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true, offset: 100 });
    return () => AOS.refresh();
  }, []);

  // Client-side validation
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    if (message.length < 10) {
      setStatus({ type: 'error', message: 'Message must be at least 10 characters long.' });
      return false;
    }
    return true;
  };

  // Copy to clipboard
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setStatus({ type: 'success', message: `${type} copied to clipboard!` });
    setTimeout(() => setStatus({ type: '', message: '' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      // Replace with your Formspree ID or use process.env.REACT_APP_FORMSPREE_ID
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        formRef.current.reset();
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'error', message: 'Error sending message. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="map-section" data-aos="fade-up">
        <h2 className="map-title" data-aos="zoom-in">Find Me</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.073013073073!2d36.821073314757!3d-1.286073999062073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sNairobi%20City%20County!5e0!3m2!1sen!2ske!4v1629786820001!5m2!1sen!2ske"
          style={{ border: 'none' }}
          allowFullScreen
          loading="lazy"
          title="Map showing Nairobi City County"
          data-aos="fade-up"
          data-aos-delay="200"
        ></iframe>
      </section>

      <section className="contact-section" data-aos="fade-up">
        <div className="contact-info">
          <h1 data-aos="zoom-in">Contact <span>Me</span></h1>
          <p data-aos="fade-right">
            Reach out via the form or use the details below. I'm excited to connect!
          </p>
          <ul>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-envelope"></i>
              <span>
                <a
                  href="mailto:walburphinehas78@gmail.com"
                  aria-label="Email Phinehas Macharia"
                >
                  walburphinehas78@gmail.com
                </a>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('walburphinehas78@gmail.com', 'Email')}
                  aria-label="Copy email address"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </span>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-phone"></i>
              <span>
                +254797204742
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('+254797204742', 'Phone')}
                  aria-label="Copy phone number"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </span>
            </li>
          </ul>
          <div className="social-media" data-aos="zoom-in" data-aos-delay="600">
            <a
              href="https://www.linkedin.com/in/phinehas-macharia-0b1b3b1b3/"
              className="social-link"
              aria-label="Visit Phinehas Macharia's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="http://www.github.com/PhinehasMacharia"
              className="social-link"
              aria-label="Visit Phinehas Macharia's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/PhinehasMachari"
              className="social-link"
              aria-label="Visit Phinehas Macharia's X profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="form-section" data-aos="fade-up">
        <div className="contact-form">
          <h3 data-aos="zoom-in">
            Send a <span>Message</span>
          </h3>
          <form onSubmit={handleSubmit} ref={formRef} aria-live="polite">
            {status.message && (
              <div
                className={`status-message ${status.type}`}
                role="alert"
                data-aos="fade-down"
              >
                {status.message}
              </div>
            )}
            <div className="form-group" data-aos="fade-right">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Your name"
                autoComplete="name"
              />
            </div>
            <div className="form-group" data-aos="fade-right" data-aos-delay="200">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Your email"
                autoComplete="email"
              />
            </div>
            <div className="form-group" data-aos="fade-right" data-aos-delay="400">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-label="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;