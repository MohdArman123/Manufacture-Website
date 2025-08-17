import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutUs.css';
import Hero from '../assets/hero-image.jpg';

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>About Us - E. ALAM FABRICATOR</title>
        <meta name="description" content="Learn about our leather manufacturing expertise and values." />
      </Helmet>
      <Header />
      
      {/* About Summary Section */}
      <section className="about-summary">
        <div className="summary-container">
          <div className="summary-content">
            <h2>Crafting Excellence in Leather Goods</h2>
            <p className="highlight-text">Established in 1995, E. ALAM FABRICATOR has become synonymous with premium leather craftsmanship.</p>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>25+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>200+</h3>
                <p>Skilled Artisans</p>
              </div>
            </div>
            <p>We combine traditional techniques with modern technology to create products that embody durability and sophistication.</p>
          </div>
          <div className="summary-image">
            <img src={Hero} alt="Craftsmanship" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mv-container">
          <div className="mv-content">
            <h2>Our Mission & Vision</h2>
            <div className="mv-grid">
              <div className="mv-card mission">
                <div className="mv-icon">🎯</div>
                <h3>Mission</h3>
                <p>To deliver exceptional leather goods through innovative craftsmanship while maintaining sustainable practices and ethical manufacturing standards.</p>
              </div>
              <div className="mv-card vision">
                <div className="mv-icon">🔭</div>
                <h3>Vision</h3>
                <p>To become the global benchmark for luxury leather manufacturing, inspiring trust through quality and innovation.</p>
              </div>
            </div>
          </div>
          <div className="mv-image">
            <img src={Hero} alt="Mission & Vision" />
            <div className="mv-overlay">
              <h4>Guiding Principles</h4>
              <p>Quality • Innovation • Sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="manufacturing-excellence">
        <div className="excellence-container">
          <h2>Manufacturing Excellence</h2>
          
          <div className="excellence-grid">
            <div className="excellence-card">
              <div className="excellence-text">
                <h3>Advanced Automation</h3>
                <p>State-of-the-art machinery ensures precision cutting and stitching</p>
              </div>
              <div className="excellence-image">
                <img src={Hero} alt="Automation" />
              </div>
            </div>

            <div className="excellence-card reverse">
              <div className="excellence-image">
                <img src={Hero} alt="Quality Control" />
              </div>
              <div className="excellence-text">
                <h3>Quality Assurance</h3>
                <p>Rigorous 12-point inspection process for every product</p>
              </div>
            </div>

            <div className="excellence-card">
              <div className="excellence-text">
                <h3>Production Capacity</h3>
                <ul className="capacity-list">
                  <li>15,000+ leather bags monthly</li>
                  <li>200,000+ wallets monthly</li>
                  <li>ISO 9001 Certified</li>
                </ul>
              </div>
              <div className="excellence-image">
                <img src={Hero} alt="Production" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;