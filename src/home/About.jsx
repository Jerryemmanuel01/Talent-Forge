import React from "react";
import AboutImg from "../assets/talent-forge02.jpg";

const About = () => {
  return (
    <div className="about-sec">
      <div className="container">
        <div className="head--sec d-flex justify-content-center shadow-sm">
          <h1 className="fw-bold head-txt fs-1">ABOUT</h1>
        </div>

        {/* About body */}

        <div className="d-flex flex-column px-2 flex-wrap flex-md-row justify-content-center align-items-center mt-5 gap-5">
          {/* about image */}
          <div className="col-lg-5 col-12">
            <img src={AboutImg} alt="" className="about--img card" />
          </div>

          {/* about text */}
          <div className="col-lg-6 col-12 fs-4 about--txt">
            We optimize organizational success by seamlessly aligning diverse
            talents with opportunities, utilizing a collaborative and
            client-centric approach, transforming potential into unparalleled
            performance and shaping a future of continuous growth and excellence
            for businesses
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
