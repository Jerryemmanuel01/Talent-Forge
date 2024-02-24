import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { LuBarChart4 } from "react-icons/lu";

const Intro = () => {
  return (
    <div className="container my-5">
      {/* <div className="intro-head"><h2 className="head-txt"></h2></div> */}
      <div className="d-flex flex-column flex-wrap flex-md-row align-items-center justify-content-center gap-5 container">
        <div style={{ width: 300 }}>
          <div className="card shadow">
            <div className=" fs-5 text-light pt-2 bg-primary d-flex flex-column align-items-center justify-content-center">
              <p>Recruitment</p>
              <p>&</p>
              <p>Outsourcing</p>
            </div>
            <div className=" fs-5 intro-icon-div bg-white d-flex flex-column align-items-center justify-content-center">
              <BsPersonFill className="fs-1 text-primary" />
            </div>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <div className="card shadow col-md-12">
            <div className=" fs-5 text-light pt-2 bg-primary d-flex flex-column align-items-center justify-content-center">
              <p>Learning</p>
              <p>&</p>
              <p>Development</p>
            </div>
            <div className=" fs-5 intro-icon-div bg-white d-flex flex-column align-items-center justify-content-center">
              <HiLightBulb className="fs-1 text-primary" />
            </div>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <div className="card shadow">
            <div className=" fs-5 text-light pt-2 bg-primary d-flex flex-column align-items-center justify-content-center">
              <p>Consulting</p>
              <p>&</p>
              <p>Advisory</p>
            </div>
            <div className=" fs-5 intro-icon-div bg-white d-flex flex-column align-items-center justify-content-center">
              <LuBarChart4 className="fs-1 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro