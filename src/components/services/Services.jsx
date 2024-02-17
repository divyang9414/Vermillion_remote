import React from "react";
import './services.css'

const Services = () => {
  return (
    <section id="services" className="">
      <div className="container">
        <div className="s_title text-center mb-4">
          <span className="font-weight-bold">SERVICES</span>
          <h2 className="my-3">
            Our <span className="text-secondary">Medical</span> Services
          </h2>
        </div>

        <div className="row row-cols-1 row-cols-lg-3">
          <div className="col">
            <div className="card border-0 p-4 rounded-top-4 rounded-end-4 shadow">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="">Kidney Stone</h2>
                <div className="peginetion"><i className="ri-arrow-right-up-line"></i></div>
              </div>
              <p className="mt-4 mb-4">
                We are providing the cardiology services for our patients that are very much needed.
              </p>
              <img src="./Serv_1.png" alt="" className="img-fluid rounded-top-4 rounded-end-4" />
            </div>
          </div>
          <div className="col">
            <div className="card border-0 p-4 rounded-top-4 rounded-end-4 shadow">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="">Prostate</h2>
                <div className="peginetion"><i className="ri-arrow-right-up-line"></i></div>
              </div>
              <p className="mt-4 mb-4">
                We are providing the cardiology services for our patients that are very much needed.
              </p>
              <img src="./Serv_2.png" alt="" className="img-fluid rounded-top-4 rounded-end-4" />
            </div>
          </div>
          <div className="col">
            <div className="card border-0 p-4 rounded-top-4 rounded-end-4 shadow">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="">Uro Oncology</h2>
                <div className="peginetion"><i className="ri-arrow-right-up-line"></i></div>
              </div>
              <p className="mt-4 mb-4">
                We are providing the cardiology services for our patients that are very much needed.
              </p>
              <img src="./Serv_3.png" alt="" className="img-fluid rounded-top-4 rounded-end-4" />
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between my-3 px-4">
          <div className="srvs_left d-flex align-items-center">
            <img src="./left_ar.png" alt="" />
            <span className="ps-3">Previous</span>
          </div>
          <div className="srvs_right d-flex align-items-center">
            <span className="pe-3">Next</span>
            <img src="./right_ar.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
