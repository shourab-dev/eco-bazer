import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./middleHeader.css";
const MiddleHeader = () => {
  return (
    <div className="middleHeader d-none d-lg-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              <Link to="/">
                <img
                  src="/public/images/Logo.png"
                  alt=""
                  style={{ maxWidth: "180px", width: "100%" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="searchArea">
              <form className="d-flex w-100  position-relative" action="">
                <div className="searchicon">
                  <FiSearch />
                </div>
                <input type="text" placeholder="Search" />
                <button>Search</button>
              </form>
            </div>
          </div>
          <div className="col-lg-3">
            <ul className="d-flex justify-content-end links">
              <li>
                <Link>
                  <FiHeart />
                </Link>
              </li>
              <li>
                <Link className="d-flex align-items-center">
                
                    <div className="cartIcon">
                      <HiOutlineShoppingBag />
                      <span className="cartCount">2</span>
                    </div>
                    <div className="cardDetail">
                      <p>Shopping cart:</p>
                      <h5>$57.00</h5>
                    </div>
                 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
