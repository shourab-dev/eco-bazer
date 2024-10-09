import React from "react";
import { Link } from "react-router-dom";

const Button = ({ href = "#", className, children }) => {
  const styling = {
    padding: "16px 40px",
    borderRadius: "43px",
    background: `var(--branding-success)`,
    color: `white`,
    display: "inline-block",
  };
  return (
    <Link to={href} className={className} style={styling}>
      {children ?? 'Shop Now'}
    </Link>
  );
};

export default Button;
