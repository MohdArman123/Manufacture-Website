import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Blog.css";

function Blog() {
  const articles = [
    {
      id: 1,
      title: "Wallet Trends 2023",
      excerpt: "Explore the latest in wallet design.",
    },
    {
      id: 2,
      title: "Branding with Wallets",
      excerpt: "How to use wallets for promotion.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Blog - E. ALAM FABRICATOR</title>
        <meta
          name="description"
          content="Read about wallet trends and branding tips."
        />
      </Helmet>
      <Header />
      <section className="blog">
        <h2>Blog & Resources</h2>
        {articles.map((article) => (
          <div key={article.id} className="article">
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <a href="https://www.linkedin.com/feed/">Read More</a>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
