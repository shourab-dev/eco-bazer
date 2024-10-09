import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "./heading.css";
const Heading = ({heading, href = '#'}) => {
  return (
    <>
      {heading && (
        <div className="d-flex heading align-items-center justify-content-between">
          <h2>{heading}</h2>
          <Link to={href}>
            View All <GoArrowRight />
          </Link>
        </div>
      )}
    </>
  );
};

export default Heading;
