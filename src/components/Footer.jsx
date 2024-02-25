import React from "react";
import Logo from "../assets/talent-forge-logo.png";

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer--sec px-2 d-flex flex-column justify-content-around" id="contact">
      <div className="footer--all container d-flex flex-column justify-content-around">
        <div className="py-5 gap-5 text-light d-flex flex-wrap justify-content-between">
          <div className="footer--name col-md-5 col-12">
            <div className="footer--logo">
              <img src={Logo} alt="" width={60} className="me-2" />
            </div>
            <div className="fs-2 mt-2 fw-bold d-flex align-items-center">
              Talent Forge
            </div>
            <p className="footer--txt">
              Unleashing Potential, Igniting Performance
            </p>
          </div>

          {/* right links side */}
          <div className="footer--name col-md-3 col-12">
            <h4 className="fw-bold text-primary">Links</h4>
            <div className="footer--link">
              <a
                href="#"
                className="link-underline link-underline-opacity-0 text-light"
              >
                Home
              </a>
            </div>
            <div className="footer--link">
              <a
                href="#"
                className="link-underline link-underline-opacity-0 text-light"
              >
                About
              </a>
            </div>
            <div className="footer--link">
              <a
                href="#"
                className="link-underline link-underline-opacity-0 text-light"
              >
                Our Service
              </a>
            </div>
            <div className="footer--link">
              <a
                href="#"
                className="link-underline link-underline-opacity-0 text-light"
              >
                Model
              </a>
            </div>
            <div className="footer--link">
              <a
                href="#"
                className="link-underline link-underline-opacity-0 text-light"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social tags */}
          <div className="footer--name col-md-3 col-12">
            <h4 className="fw-bold text-primary">Social</h4>
            <div className="social--icons fs-5">
              <FaFacebookF className="me-2" />
              <FaWhatsapp className="me-2" />
              <FaInstagram className="me-2" />
              <FaLinkedin className="me-2" />
              <FaXTwitter className="me-2" />
            </div>
          </div>
        </div>
        <div className="text-light pb-5">&#169; Copyright 2024, Talent Forge | All Rights Reserverd</div>
      </div>
    </div>
  );
};

export default Footer;
