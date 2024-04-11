"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import contactImage from "../../assets/images/9628536.jpg";
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp_no: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      console.log(response);

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          whatsapp_no: "",
          message: ""
        });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="container">
      <div className="contact">
        <div className="contact-img">
          <Image
            src={contactImage}
            alt="Contact for SEO"
            className='img-contact'
          />
        </div>
        <div className="contact-form">
          <h2>Enquire Now</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Your WhatsApp Number"
              name="whatsapp_no"
              value={formData.whatsapp_no}
              onChange={handleChange}
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {status === 'success' && <p>Thank you for your message!</p>}
          {status === 'error' && <p>There was an error submitting your message. Please try again.</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
