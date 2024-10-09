import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to='/'>
        <img
          src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Error404
