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
            <div className="py-3 text-light bg-primary d-flex flex-column align-items-center justify-content-center">
              <h6>Recruitment</h6>
              <h6>&</h6>
              <h6>Outsourcing</h6>
            </div>
            <div className=" fs-5 intro-icon-div bg-white d-flex flex-column align-items-center justify-content-center">
              <BsPersonFill className="fs-1 text-primary" />
            </div>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <div className="card shadow col-md-12">
            <div className="py-3 text-light bg-primary d-flex flex-column align-items-center justify-content-center">
              <h6>Learning</h6>
              <h6>&</h6>
              <h6>Development</h6>
            </div>
            <div className=" fs-5 intro-icon-div bg-white d-flex flex-column align-items-center justify-content-center">
              <HiLightBulb className="fs-1 text-primary" />
            </div>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <div className="card shadow">
            <div className="py-3 text-light bg-primary d-flex flex-column align-items-center justify-content-center">
              <h6>Consulting</h6>
              <h6>&</h6>
              <h6>Advisory</h6>
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