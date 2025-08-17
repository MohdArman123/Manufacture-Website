import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Team.css';
import TeamImage1 from "../assets/hero-image.jpg"; // Replace with actual team images
import TeamImage2 from "../assets/hero-image.jpg";
import TeamImage4 from "../assets/hero-image.jpg";
import TeamImage3 from "../assets/hero-image.jpg";

function Team() {
  return (
    <div>
      <Header />
      <main className="team-page">
        {/* Our Team Section */}
        <section className="team-section">
          <div className="team-container">
            <div className="team-image">
              <img src={TeamImage1} alt="Our Team" loading="lazy" />
            </div>
            <div className="team-content">
              <h2>Our Team</h2>
              <ul>
                <li>Dedicated artisans with decades of experience in leather craftsmanship.</li>
                <li>A passionate design team driving innovation and quality.</li>
                <li>Skilled managers ensuring seamless operations and client satisfaction.</li>
                <li>A collaborative spirit that fuels our success.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose E. ALAM Team Section */}
        <section className="team-section alt-background">
          <div className="team-container">
            <div className="team-image">
              <img src={TeamImage2} alt="Why Choose Our Team" loading="lazy" />
            </div>
            <div className="team-content">
              <h2>Why Choose E. ALAM Team?</h2>
              <ul>
                <li>Expertise in delivering premium, customized leather goods.</li>
                <li>Commitment to excellence in every stitch and detail.</li>
                <li>Reliable partnership for bulk production and timely delivery.</li>
                <li>Client-focused approach to meet your unique needs.</li>
              </ul>
              <Link to="/contact" className="team-cta">Get in Touch</Link>
            </div>
          </div>
        </section>

        {/* Join Us on Our Journey Section */}
        <section className="team-section">
          <div className="team-container">
            <div className="team-image">
              <img src={TeamImage3} alt="Join Our Journey" loading="lazy" />
            </div>
            <div className="team-content">
              <h2>Join Us on Our Journey</h2>
              <ul>
                <li>Be part of a growing legacy in leather craftsmanship.</li>
                <li>Work with a team that values creativity and precision.</li>
                <li>Contribute to sustainable and ethical manufacturing.</li>
                <li>Grow with us as we expand globally.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="team-section alt-background">
          <div className="team-container">
            <div className="team-image">
              <img src={TeamImage4} alt="Our Leadership" loading="lazy" />
            </div>
            <div className="team-content">
              <h2>Our Leadership</h2>
              <h3>Leadership Philosophy</h3>
              <p>We lead with integrity, fostering a culture of innovation and respect.</p>
              <h3>Why Our Leadership Sets Us Apart</h3>
              <ul>
                <li>Visionary leaders with deep industry knowledge.</li>
                <li>Focus on empowering our team and clients alike.</li>
                <li>Strategic direction for sustainable growth.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Team;