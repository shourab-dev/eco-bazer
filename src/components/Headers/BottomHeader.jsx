import React, { useState } from 'react'
import "./bottomHeader.css"
import { FiPhoneCall } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
const BottomHeader = () => {

    const [dropdown, setDropdown] = useState(false)


  return (
    <div className="bottomHeader d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 d-flex">
            <div className={`categoryMenu ${dropdown ? "isActive" : ""}`}>
              <button onClick={() => setDropdown(!dropdown)}>
                <LuMenu /> All Categories{" "}
                <span className="downArrow">
                  <FaAngleDown />
                </span>
              </button>

              <div className="categoryDropdown">
                <ul>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Widgets</a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="d-flex align-items-center primaryMenu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <a className="phoneNumber d-flex align-items-center justify-content-end">
              <span>
                <FiPhoneCall />
              </span>{" "}
              (219) 555-0114
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader
