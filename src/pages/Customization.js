import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import './Customization.css';

function Customization() {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/custom-quote', formData);
      alert('Quote request sent!');
      setFormData({ name: '', email: '', details: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Customization - E. ALAM FABRICATOR</title>
        <meta name="description" content="Customize your wallets with us." />
      </Helmet>
      <Header />
      <section className="customization">
        <h2>Customization & Branding</h2>
        <p>Personalize your wallets with logos, materials, and more.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Customization Details" required />
          <button type="submit">Request Quote</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Customization;