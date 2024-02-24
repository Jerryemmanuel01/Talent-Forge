import React from "react";
import AboutImg from "../assets/talent-forge03.jpg";

import { FaDotCircle } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="customer-sec">
      <div className="container py-5">
        <div className="head--sec d-flex justify-content-center shadow-sm">
          <h1 className="fw-bold head-txt fs-1">OUR CUSTOMER</h1>
        </div>
        <div className="d-flex flex-column flex-wrap flex-md-row flex-md-row-reverse justify-content-center align-items-center mt-5 gap-5">
          {/* about image */}
          <div className="col-lg-5 col-12">
            <img src={AboutImg} alt="" className="about--img card" />
          </div>

          {/* about text */}
          <div className="col-lg-6 col-12 fs-3 fw-bold about--txt">
            <div className="mb-3">
              <p className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-5" />
                Organizations of All Sizes
              </p>
            </div>
            <div className="mb-3">
              <h3 className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-5" />
                Startups
              </h3>
            </div>
            <div className="mb-3">
              <h3 className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-5" />
                Individual Professionals
              </h3>
            </div>
            <div className="mb-3">
              <h3 className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-5" />
                Learning and Development Seekers
              </h3>
            </div>
            <div className="mb-3">
              <h3 className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-5 h5 fs-sm-6" />
                Companies Expanding Globally
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
