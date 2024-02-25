import React from "react";
import AboutImg from "../assets/talent-forge03.jpg";

import { FaDotCircle } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="customer-sec" id="contact">
      <div className="container py-5">
        <div className="head--sec d-flex justify-content-center shadow-sm">
          <h1 className="fw-bold head-txt fs-1">OUR CUSTOMER</h1>
        </div>
        <div className="d-flex flex-column flex-wrap px-2 flex-md-row flex-md-row-reverse justify-content-center align-items-center mt-5 gap-5">
          {/* about image */}
          <div className="col-lg-5 col-12 bg-white card shadow p-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control text--area"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                <button className="get-in-touch mt-2 p-4 btn btn-primary py-2">
                  <span className="link-underline link-underline-opacity-0 text-light">
                    Get in touch
                  </span>
                </button>
              </div>
            </form>
            {/* <img src={AboutImg} alt="" className="about--img card" /> */}
          </div>

          {/* about text */}
          <div className="col-lg-6 col-12 fs-5 about--txt">
            <div className="mb-3">
              <p className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-6" />
                Organizations of All Sizes
              </p>
            </div>
            <div className="mb-3">
              <p className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-6" />
                Startups
              </p>
            </div>
            <div className="mb-3">
              <p className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-6" />
                Individual Professionals
              </p>
            </div>
            <div className="mb-3">
              <p className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-6" />
                Learning and Development Seekers
              </p>
            </div>
            <div className="mb-3">
              <p className="target d-flex align-items-center">
                <FaDotCircle className="me-2 text-primary fs-6" />
                Companies Expanding Globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
