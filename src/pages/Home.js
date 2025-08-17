import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";
import Hero from "../assets/trifold2.jpg";
import BeltImage from "../assets/2615.jpg";
import BagImage from "../assets/fastening-buckle-briefcase.jpg";
import AccessoryImage from "../assets/94.jpg";
import ProcessImage from "../assets/hero-image.jpg"; // Replace with a process-related image

function Home() {
  const featuredProducts = [
    { id: 1, name: "Wallets", image: Hero, link: "/products/wallets" },
    { id: 2, name: "Belts", image: BeltImage, link: "/products/belts" },
    { id: 3, name: "Bags", image: BagImage, link: "/products/bags" },
    { id: 4, name: "Accessories", image: AccessoryImage, link: "/products/accessories" },
  ];

  return (
    <div>
      <Helmet>
        <title>E. ALAM FABRICATOR - Premium Wallets</title>
        <meta name="description" content="Discover premium wallets crafted with quality and elegance." />
      </Helmet>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h2>Premium Wallets, Crafted for You</h2>
          <p>Discover elegance and quality with E. ALAM FABRICATOR.</p>
          <div className="hero-buttons">
            <Link to="/products" className="cta-button">Explore Our Collection</Link>
            <Link to="/contact" className="cta-button">Get a Quote</Link>
          </div>
        </div>
      </section>
      <section className="featured-products">
        <h3>Featured Products</h3>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} loading="lazy" />
              <h4>{product.name}</h4>
              <Link to={product.link} className="product-button">View {product.name}</Link>
            </div>
          ))}
        </div>
        <Link to="/products" className="see-more">See More Products</Link>
      </section>
      <section className="why-choose-us">
        <div className="why-choose-us-header">
          <h3>Why Choose E. ALAM FABRICATOR?</h3>
          <p>Discover what sets us apart as your premium manufacturing partner.</p>
        </div>
        <div className="reasons-grid">
          <div className="reason-card">
            <span className="reason-icon">🛠️</span>
            <h5>Expert Manufacturing</h5>
            <p>Perfect stitching, fine detailing, and superior finishing by skilled artisans.</p>
          </div>
          <div className="reason-card">
            <span className="reason-icon">📦</span>
            <h5>Your Material, Our Expertise</h5>
            <p>We transform your supplied materials into high-quality products.</p>
          </div>
          <div className="reason-card">
            <span className="reason-icon">🏭</span>
            <h5>Bulk Production</h5>
            <p>Large-scale manufacturing with consistent quality for wholesalers.</p>
          </div>
          <div className="reason-card">
            <span className="reason-icon">🎨</span>
            <h5>Customization & Branding</h5>
            <p>Tailored designs with logos and engravings to elevate your brand.</p>
          </div>
          <div className="reason-card">
            <span className="reason-icon">💰</span>
            <h5>Competitive Pricing</h5>
            <p>Cost-effective solutions without compromising quality.</p>
          </div>
          <div className="reason-card">
            <span className="reason-icon">⏰</span>
            <h5>Reliable Delivery</h5>
            <p>Efficient workflows ensuring on-time order fulfillment.</p>
          </div>
          <div className="reason-card">
            <span className="reason-icon">🌍</span>
            <h5>Future-Ready</h5>
            <p>Expanding to global shipping and material sourcing.</p>
          </div>
        </div>
        <div className="contact-cta">
          <h4>Let’s Build Together!</h4>
          <p>Join us to create exceptional products for your brand.</p>
          <Link to="/contact" className="cta-button">Contact Us Today</Link>
        </div>
      </section>
      <section className="about-us-preview">
        <div className="about-container">
          <div className="about-summary">
            <h3>About Us</h3>
            <p>Learn about our journey and commitment to excellence. At E. ALAM FABRICATOR, we blend tradition with innovation to craft premium leather goods that stand the test of time.</p>
            <Link to="/about" className="see-more">See More</Link>
          </div>
          {/* <div className="about-image">
            <img src={ProcessImage} alt="About E. ALAM FABRICATOR" loading="lazy" />
          </div> */}
        </div>
      </section>
      <section className="our-process">
        <div className="process-container" style={{ backgroundImage: `url(${ProcessImage})` }}>
          <h3>Our Process</h3>
          <div className="process-cards">
            <div className="process-card">
              <h4>01: R&D</h4>
              <p>Our Research & Development team innovates designs and techniques to ensure top-quality products tailored to your needs.</p>
            </div>
            <div className="process-card">
              <h4>02: Sourcing</h4>
              <p>We carefully source or utilize your provided materials, ensuring sustainability and premium quality for every item.</p>
            </div>
            <div className="process-card">
              <h4>03: Production</h4>
              <p>Skilled artisans craft each product with precision, delivering durable and elegant goods in bulk or custom orders.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-preview">
        <div className="contact-container">
          <div className="contact-details">
            <h3>Contact Us Anytime</h3>
            <p><strong>Office Address INDIA:</strong><br />L-42-43 Chanakya Place Part-2, C1 Janakpuri, West Delhi, Delhi 110059</p>
            <p><strong>For India:</strong> 09971018371</p>
            <p><strong>Email-id:</strong> armansheakh987@gmail.com</p>
          </div>
          <div className="contact-map">
            <a
              href="https://www.google.com/maps/place/L-42-43,+Chanakya+Place+Part-2,+C1+Janakpuri,+West+Delhi,+Delhi+110059,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9890489748047!2d77.08305631508222!3d28.63201598241722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c8e8f8e8f8f%3A0x8f8e8f8e8f8e8f8f!2sChanakya+Place+Part-2%2C+C1+Janakpuri%2C+West+Delhi%2C+Delhi+110059%2C+India!5e0!3m2!1sen!2sus!4v1631234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="E. ALAM FABRICATOR Location"
              ></iframe>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;