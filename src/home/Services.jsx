import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { LuBarChart4 } from "react-icons/lu";

const Services = () => {
  return (
    <div className="services--sec" id='service'>
      <div className="container-fluid">
        {/* services head */}
        <div className="head--sec d-flex justify-content-center shadow-sm">
          <h1 className="fw-bold head-txt fs-1">OUR SERVICES</h1>
        </div>

        {/* services body */}
        <div className="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-center gap-5 container mt-5">
          <div className="col-12 text-center text-md-start col-md-9 col-lg-4 col-xl-3">
            <div className="card shadow">
              <div className=" fs-5 service--card p-4 d-flex flex-column align-items-center justify-content-center">
                <div className="service-body-head d-flex align-items-center gap-2 w-100">
                  <div className="icon--div p-2 rounded-circle bg-primary d-flex justify-content-center align-items-center">
                    <BsPersonFill className="fs-1  text-light" />
                  </div>

                  <h5 className="fw-bold">Recruitment & Outsourcing</h5>
                </div>
                <div className="service-body-main fs-6 mt-3">
                  Our expert recruitment and outsourcing services ease talent
                  acquisition, ensuring the right individuals are placed in
                  befitting roles, enhancing organizational efficiency and
                  success
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center text-md-start col-md-9 col-lg-4 col-xl-3">
            <div className="card shadow">
              <div className=" fs-5 service--card p-4 d-flex flex-column align-items-center justify-content-center">
                <div className="service-body-head d-flex align-items-center gap-2 w-100 ">
                  <div className="icon--div p-2 rounded-circle bg-primary d-flex justify-content-center align-items-center">
                    <HiLightBulb className="fs-1  text-light" />
                  </div>

                  <h5 className="fw-bold">Learning & Development</h5>
                </div>
                <div className="service-body-main fs-6 mt-3">
                  We foster continuous growth through tailored learning and
                  development initiatives, empowering individuals and
                  organizations to adapt, thrive, and excel in a dynamic
                  environment
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center text-md-start col-md-9 col-lg-4 col-xl-3">
            <div className="card shadow">
              <div className=" fs-5 service--card p-4 d-flex flex-column align-items-center justify-content-center">
                <div className="service-body-head d-flex align-items-center gap-2 w-100">
                  <div className="icon--div p-2 rounded-circle bg-primary d-flex justify-content-center align-items-center">
                    <LuBarChart4 className="fs-1  text-light" />
                  </div>

                  <h5 className="fw-bold">Consulting & Advisory</h5>
                </div>
                <div className="service-body-main fs-6 mt-3">
                  Our strategic consulting services provide insightful guidance,
                  leveraging industry expertise to address challenges and
                  optimize opportunities, ultimately driving organizational
                  excellence and sustainable success.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services