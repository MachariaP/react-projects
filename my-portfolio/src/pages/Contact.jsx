import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section className="map-section" data-aos="fade-up" data-aos-duration="1000">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.073013073073!2d36.821073314757!3d-1.286073999062073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0b0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sNairobi%20City%20County!5e0!3m2!1sen!2ske!4v1629786820001!5m2!1sen!2ske" style={{ border: 'none' }} allowFullScreen loading="lazy"></iframe>
      </section>

      <section className="contact-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="contact-info">
          <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">Contact <span>Me</span></h1>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Feel free to get in touch using the details below or the contact form.</p>
          <ul>
            <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"><i className="fas fa-envelope"></i> <a href="mailto:walburphinehas78@gmail.com">walburphinehas78@gmail.com</a></li>
            <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"><i className="fas fa-phone"></i> +254797204742</li>
          </ul>
          <div className="social-media" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200">
            <a href="https://www.linkedin.com/in/phinehas-macharia-0b1b3b1b3/" className="social-link"><i className="fab fa-linkedin"></i></a>
            <a href="http://www.github.com/PhinehasMacharia" className="social-link"><i className="fab fa-github"></i></a>
            <a href="https://x.com/PhinehasMachari" className="social-link"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </section>

      <section className="form-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <div className="contact-form">
          <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Send a <span>Message</span></h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required aria-label="Your name" autoComplete="on" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" />
            <label htmlFor="email" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-label="Your email" autoComplete="on" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1400" />
            <label htmlFor="message" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">Message:</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required aria-label="Your message" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1800"></textarea>
            <button type="submit" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2000">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;