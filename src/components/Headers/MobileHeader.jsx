import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./MblHeader.css";
import Sidebar from "../utils/Sidebar";

const MobileHeader = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="mblHeader d-lg-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="menu col">
              <button onClick={(e) => setSidebar(!sidebar)}>
                <BiMenuAltLeft />
              </button>
            </div>
            <div className="logo col-8 text-center">
              <Link>
                <img src="/images/Logo.png" alt="" />
              </Link>
            </div>
            <div className="quickLinks col">
              <Link>
                <FiSearch />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Sidebar setSidebar={setSidebar} sidebar={sidebar}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </Sidebar>
    </>
  );
};

export default MobileHeader;
