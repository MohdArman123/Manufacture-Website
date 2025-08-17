import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Products.css';
import WalletImage from '../assets/hero-image.jpg';
import BeltImage from '../assets/belt4.jpg';
import BagImage from '../assets/hero-image.jpg';

function Products() {
  const categories = [
    {
      name: 'Wallets',
      summary: 'Handcrafted with premium leather and fine stitching, our wallets blend durability with timeless design. Each piece is designed to organize your essentials effortlessly—cards, cash, and IDs—while maintaining a sleek profile that fits comfortably in your pocket. A perfect balance of functionality and sophistication for everyday use.',
      image: WalletImage,
      link: '/products/wallets',
    },
    {
      name: 'Belts',
      summary: 'Our belts are manufactured from high-quality genuine leather and sturdy metal buckles, ensuring long-lasting strength and style. With meticulous finishing and polished edges, they are designed to complement both formal and casual outfits. Built for durability yet crafted with elegance, they’re more than an accessory—they’re a statement of refinement.',
      image: BeltImage,
      link: '/products/belts',
    },
    {
      name: 'Bags',
      summary: 'Engineered with precision and crafted from durable materials, our bags are the perfect fusion of practicality and fashion. Whether it’s for work, travel, or casual outings, each bag offers spacious compartments, strong handles, and a refined look. Designed to carry your world with ease, they embody both reliability and contemporary elegance.',
      image: BagImage,
      link: '/products/bags',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Products - E. ALAM FABRICATOR</title>
        <meta name="description" content="Explore our premium product collections." />
      </Helmet>
      <Header />
      <section className="products-summary">
        <div className="summary-content">
          <h2>Our Product Collections</h2>
          <p>Discover our range of high-quality leather goods, crafted with care and precision.</p>
        </div>
      </section>
      <section className="explore-section">
        {categories.map((category, index) => (
          <div key={index} className="category-container">
            <div className="category-summary">
              <h3>{category.name}</h3>
              <p>{category.summary}</p>
              <Link to={category.link} className="explore-button">Explore {category.name}</Link>
            </div>
            <div className="category-image">
              <img src={category.image} alt={category.name} loading="lazy" />
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Products;