import React from "react";
import "./productSection.css";
import Heading from "../utils/Heading";
import ProductCard from "../utils/ProductCard";

const ProductLists = ({ heading, href }) => {
  const products = [
    {
      id: 1,
      price: 14.99,
      url: "#",
      name: "green apple",
      thumbnail: "/images/product.png",
      rating: 5,
      label: 'Best Seller'

    },
    {
      id: 2,
      price: 2.99,
      url: "#",
      name: "Chanise Cabbage",
      thumbnail: "/images/product2.png",
      rating: 3,
    },
    {
      id: 3,
      price: 5,
      url: "#",
      name: "Green Capsicum",
      thumbnail: "/images/product3.png",
      rating: 2,
    },
    {
      id: 4,
      price: 20.5,
      url: "#",
      name: "Ladies Finger",
      thumbnail: "/images/product4.png",
      rating: 4,
      label: '50% off'
    },
  ];

  return (
    <section id="productWrapper">
      <div className="container">
        <Heading heading={heading} href="/test" />

        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLists;
