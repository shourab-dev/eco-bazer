import React from "react";
import "./ProductCard.css";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { HiOutlineShoppingBag } from "react-icons/hi";
const ProductCard = ({ product }) => {
  return (
    <div className="productCard ">
      <div className="productThumb">
        {product?.label && <div className="label">{product?.label}</div>}

        <Link to={product.url ?? "#"}>
          <img
            src={product.thumbnail ?? "/images/placeholder.png"}
            alt={product.title}
            className="w-100 d-block"
          />
        </Link>
      </div>
      <div className="productContent">
        <div className="d-flex align-items-center">
          <div className="leftContent col-10">
            <p>{product.name}</p>
            <h4>${product.price}</h4>
            <div className="stars text-warning">
              <Rating
                initialValue={product.rating}
                readonly={true}
                size={12}
                fillColor="#FF8A00"
              />
            </div>
          </div>
          <div className="rightContent col">
            <Link className="addToCartBtn" to="/add-to-cart">
              <HiOutlineShoppingBag />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
