import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CategoryPage.css';
import Hero from '../assets/hero-image.jpg';
import Hero1 from '../assets/bi-folld1.jpg';
import Hero2 from '../assets/bi-folld4.jpg';
import Hero3 from '../assets/bifold1.jpg';
import Hero4 from '../assets/Bi-Fold Wallets.webp';
import Hero5 from '../assets/bifolld2.jpg';
import Hero6 from '../assets/bifolld3.jpg';
import Hero7 from '../assets/bifold6.jpg';
import Hero8 from '../assets/bifolld7.jpg';
import Slim1 from '../assets/slimwallet1.jpg';
import Slim2 from '../assets/slimwallet2.jpg';
import Slim3 from '../assets/slimwallet3.jpg';
import Slim4 from '../assets/slimwallet4.jpg';
import clip1 from '../assets/Money_Clip_Wallets.webp';
import clip2 from '../assets/moneyclip1.jpg';
import clip3 from '../assets/moneyclip2.jpg';
import clip4 from '../assets/moneyclip3.jpg';
import clip5 from '../assets/moneyclip4.jpg';
import clip6 from '../assets/clip-wallet.jpg';
import clip7 from '../assets/clim wallet7.jpg';
import clip8 from '../assets/clip-wallet1.jpg';
import clip9 from '../assets/clip-wallet2.jpg';
import clip10 from '../assets/clipwallet2.jpg';
import tri1 from '../assets/triFOld.jpg';
import tri2 from '../assets/trifold1.jpg';
import tri3 from '../assets/trifold2.jpg';
import tri4 from '../assets/trifold3.jpg';
import tri5 from '../assets/trifold5.jpg';
import tri6 from '../assets/trifold6.jpg';
import tri7 from '../assets/trifold7.jpg';

import belt1 from "../assets/casual_belt1.jpg"
import belt2 from "../assets/belt2.jpg"
import belt3 from "../assets/belt3.jpg"
import belt4 from "../assets/belt4.jpg"
import belt5 from "../assets/belt5.jpg"
import belt6 from "../assets/belt6.jpg"
import belt7 from "../assets/belt7.jpg"
import belt8 from "../assets/belt8.jpg"
import belt9 from "../assets/belt9.jpg"
import belt10 from "../assets/belt10.jpg"

import bag1 from "../assets/bag1.jpg"
import bag2 from "../assets/bag2.jpg"
import bag3 from "../assets/bag3.jpg"
import bag4 from "../assets/bag4 (1).jpg"
import bag5 from "../assets/bag4 (2).jpg"
import bag6 from "../assets/bag4 (3).jpg"

import bag7 from "../assets/miniwallet1 (1).jpg"
import bag8 from "../assets/miniwallet1 (2).jpg"
import bag9 from "../assets/miniwallet1 (3).jpg"
import bag10 from "../assets/bag5.jpg"

const categoryProducts = {
  wallets: [
    { id: 1, name: 'Bi-fold Wallet', images: [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8] },
    { id: 2, name: 'Slim Wallet', images: [Slim1, Slim2, Slim3, Slim4] },
    { id: 3, name: 'Money Clip Wallet', images: [clip10, clip1, clip2, clip3, clip4, clip5, clip6, clip7, clip8, clip9] },
    { id: 4, name: 'Tri-fold Wallet', images: [tri1, tri2, tri3, tri4, tri5, tri6, tri7] },
  ],
  belts: [
    { id: 5, name: 'Formal Belts', images: [belt4, belt3, belt7] },
    { id: 6, name: 'Casual Belts', images: [belt9, belt1, belt6] },
    { id: 7, name: 'Reversible Belts', images: [belt2, belt10] },
    { id: 8, name: 'Designer Belts', images: [belt5, belt8] },
  ],
  bags: [
    { id: 9, name: 'Leather Backpacks', images: [bag1,bag3, bag2] },
    { id: 10, name: 'Messenger Bags', images: [bag4, bag5, bag6] },
    { id: 11, name: 'Mini wallet', images: [bag7, bag8, bag9] },
    { id: 12, name: 'Packet Bag', images: [bag10] },
  ],
  accessories: [
    { id: 13, name: 'Keychains', images: [Hero, Hero] },
    { id: 14, name: 'Card Holders', images: [Hero] },
  ]
};

function CategoryPage() {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = categoryProducts[category] || [];

  return (
    <div>
      <Header />
      <section className="category-page">
        <h2 className="section-title">
          Explore Our {category.charAt(0).toUpperCase() + category.slice(1)} Collection
        </h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-scroll-container">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() => setSelectedProduct(product)}
                    loading="lazy"
                  />
                ))}
              </div>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn">×</button>
            <div className="modal-images">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProduct.name} ${index + 1}`}
                  className="modal-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CategoryPage;