import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import "./sidebar.css"
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebar, setSidebar,children }) => {
  return (
    <div
      className={`sidebar ${sidebar ? "open" : ""}`}
      onClick={(e) => {
        e.target.classList.contains("sidebar") ? setSidebar(false) : false;
      }}
    >
      <div className="sidebarCnt">
        <button onClick={(e) => setSidebar(false)} className="closeBtn">
          <RxCross2 />
        </button>
        <ul>
         {children}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar
