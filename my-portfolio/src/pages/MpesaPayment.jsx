import React from 'react';
import '../styles/MpesaPayment.css';

function MpesaPayment() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    alert(`Initiating M-Pesa STK Push to ${phone} for KES ${amount}. Check your phone!`);
  };

  return (
    <section className="mpesa-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="mpesa-header">
        <img src="/images/mpesa-logo.png" alt="M-Pesa Logo" className="mpesa-logo" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" />
        <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">Pay with <span>M-Pesa</span></h1>
        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Seamless payments powered by Daraja API, engineered by Phinehas Macharia.</p>
      </div>
      <div className="mpesa-container">
        <div className="payment-form" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
          <h2>Make a Payment</h2>
          <form id="paymentForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="e.g., 254712345678" pattern="254[7-9][0-9]{8}" required />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount (KES)</label>
              <input type="number" id="amount" placeholder="e.g., 1000" min="1" required />
            </div>
            <button type="submit" className="pay-btn">Pay Now</button>
          </form>
          <p className="form-note">Enter your M-Pesa registered number and amount to initiate an STK push.</p>
        </div>
        <div className="payment-preview" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
          <h2>Payment Preview</h2>
          <div className="preview-box">
            <img src="/images/mpesa-stk-push.png" alt="M-Pesa STK Push Preview" className="stk-preview" />
            <p>After clicking "Pay Now", you'll receive an STK push like this on your phone. Enter your PIN to complete the transaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MpesaPayment;