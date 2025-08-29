import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/contact', formData);
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - E. ALAM FABRICATOR</title>
        <meta name="description" content="Get in touch with us for inquiries." />
      </Helmet>
      <Header />
      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
        <div className="contact-details">
          <p>Email: armansheakh987@gmail.com</p>
          <p>Phone: +91 8178642398</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;