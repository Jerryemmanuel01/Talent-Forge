import React from "react";
import HomeImg from "../assets/talent-forge-01.png"

const Home = () => {
  return (
    <div className="home--sec">
      <div className="container ">
        <div className="row  home--row">
          {/* Hero text section */}
          <div className="col-lg-7 col-12">
            <h2 className="hero--txt fw-bold ">Talent Forge</h2>
            <p className="hero--sub-text">
              Unleashing Potential, Igniting Performance
            </p>
            <p className="hero--desc">
              Talent Forge Nigeria is a creative and forward-thinking HR
              consulting firm committed to transforming organizations and
              individuals in the dynamic landscape of the modern workplace. Our
              core commitment is to harness the complete potential of human
              capital, specializing in recruitment, outsourcing, learning and
              development, and consulting services.
            </p>
            <button className="get-in-touch btn btn-primary py-2">
              Get in touch
            </button>
          </div>

          {/* Hero image section */}
          <div className="col-lg-5 col-12 d-sm-none d-md-block">
            <img src={HomeImg} alt="" width={500} className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
