import React, { useState } from 'react';
import '../styles/MpesaPayment.css';
import 'aos/dist/aos.css'; // AOS styles (already in App.jsx, but safe to include)

function MpesaPayment() {
  // Form state
  const [formData, setFormData] = useState({
    phone: '+254797204742', // Default phone number
    amount: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectNotice, setRedirectNotice] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setRedirectNotice(''); // Clear notice on input change
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.phone.match(/^\+2547\d{8}$/)) {
      newErrors.phone = 'Enter a valid phone number (e.g., +254712345678)';
    }
    if (!formData.amount || formData.amount <= 0) {
      newErrors.amount = 'Enter a positive amount';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const recipientPhone = '+254797204742'; // Default recipient
    if (formData.phone !== recipientPhone) {
      setRedirectNotice(
        `Your payment will be redirected to ${recipientPhone} for this demo.`
      );
    }

    // Simulate API call (e.g., M-Pesa STK push)
    setTimeout(() => {
      alert(`Payment of KES ${formData.amount} to ${recipientPhone} initiated!`);
      setIsSubmitting(false);
      setFormData({ phone: recipientPhone, amount: '' });
      setRedirectNotice('');
    }, 1000);
  };

  return (
    <section className="mpesa-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="mpesa-header">
        <img
          src="/images/mpesa-logo.png"
          alt="M-Pesa Logo"
          className="mpesa-logo"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <h1>
          Support My Work with <span>M-Pesa</span>
        </h1>
        <p>Make a quick and secure payment to fuel my projects!</p>
      </div>
      <div className="mpesa-container">
        <div className="payment-form" data-aos="fade-right" data-aos-delay="400">
          <h2>Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div className={`form-group phone ${errors.phone ? 'error' : ''}`}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +254712345678"
                required
                className={errors.phone ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className={`form-group amount ${errors.amount ? 'error' : ''}`}>
              <label htmlFor="amount">Amount (KES)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="e.g., 100"
                min="1"
                required
                className={errors.amount ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.amount && <span className="error-message">{errors.amount}</span>}
            </div>
            <button
              type="submit"
              className="pay-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Send Payment'}
            </button>
            <p className="form-note">
              Ensure your M-Pesa account has sufficient funds.
            </p>
          </form>
        </div>
        <div className="payment-preview" data-aos="fade-left" data-aos-delay="400">
          <h2>Preview</h2>
          <img
            src="/images/mpesa-stk-push.png"
            alt="M-Pesa STK Push Preview"
            className="stk-preview"
          />
          <p className="thank-you">
            Thank you for testing our M-Pesa Daraja integration! Your support helps drive innovation.
          </p>
          {redirectNotice && (
            <p className="redirect-notice">
              {redirectNotice}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default MpesaPayment;