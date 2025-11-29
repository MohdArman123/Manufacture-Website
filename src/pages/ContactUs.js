// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import axios from 'axios';
// import './ContactUs.css';

// function ContactUs() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://manufacturing-contact.onrender.com/api/v1/contact', formData);
//       // await axios.post('http://localhost:5000/api/v1/contact', formData);
//       alert('Message sent!');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Contact Us - NOORK ENTERPRISES</title>
//         <meta name="description" content="Get in touch with us for inquiries." />
//       </Helmet>
//       <Header />
//       <section className="contact">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//           <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
//           <button type="submit">Send</button>
//         </form>
//         <div className="contact-details">
//           <p><strong>📧 Email-id: </strong>
//             <a href="mailto:info@noork.in">info@noork.in</a> |
//             <a href="mailto:armansheikh0110@gmail.com"> armansheikh0110@gmail.com</a>
//           </p>
//           <p><strong>📞 Phone: </strong>
//             <a href="tel:+919971018371">+91 9971018371</a> |
//             <a href="tel:+918178642398"> +91 8178642398</a>
//           </p>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default ContactUs;

import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ContactUs.css";

const API_URL = process.env.REACT_APP_API_URL || "https://manufacturing-contact.onrender.com";
// const API_URL = 'https://manufacturing-contact.onrender.com';

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required!");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Enter a valid email address");
      return false;
    }
    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/v1/contact`, formData);

      toast.success("Message sent successfully!📩");

      console.log("Backend Response:", response.data);

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Backend Error:", error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - NOORK ENTERPRISES</title>
      </Helmet>

      <Header />

      <section className="contact">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input 
            type="email"
            name="email" 
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea 
            name="message" 
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />

      <Footer />
    </>
  );
}

export default ContactUs;
