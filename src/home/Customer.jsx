import React from "react";
import AboutImg from "../assets/talent-forge03.jpg";

import { FaDotCircle } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="customer-sec">
      <div className="container">
        <div className="row flex-md-row-reverse justify-content-center align-items-center mt-5 gap-5">
          {/* about image */}
          <div className="col-lg-5 col-12">
            <img src={AboutImg} alt="" className="about--img card" />
          </div>

          {/* about text */}
          <div className="col-lg-6 col-12 fs-3 about--txt">
            <div className="target d-flex">
              <h3>
                <FaDotCircle className="me-2 text-primary fs-5" />
                Organizations of All Sizes
              </h3>
            </div>
            <div className="target d-flex">
              <FaDotCircle className="me-2 text-primary fs-5" />
              <h3>Startups</h3>
            </div>
            <div className="target d-flex">
              <FaDotCircle className="me-2 text-primary fs-5" />
              <h3>Individual Professionals</h3>
            </div>
            <div className="target d-flex">
              <FaDotCircle className="me-2 text-primary fs-5" />
              <h3>Learning and Development Seekers</h3>
            </div>
            <div className="target d-flex">
              <FaDotCircle className="me-2 text-primary fs-5" />
              <h3>Companies Expanding Globally</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
