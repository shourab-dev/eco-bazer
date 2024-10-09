import React from "react";
import "./topHeader.css";
import { CiLocationOn } from "react-icons/ci";
import Select from "../utils/Select";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="topHeader">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="text-center text-lg-start">
              <span>
                <CiLocationOn />
              </span>{" "}
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-flex justify-content-end align-items-center">
            <div className="formInput d-flex">
              <form action="">
                <Select options={["Eng", "Bn"]} />
              </form>
              <form action="">
                <Select options={["USD", "BDT"]} />
              </form>
            </div>

            <Link className="loginRoutes" to="/login">Sign In / Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
