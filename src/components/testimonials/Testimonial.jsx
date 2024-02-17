import React from "react";
import "./testimonial.css"; // Import custom CSS file

const Testimonial = () => {
  return (
    <section id="testimonial" className="">
      <div className="container">
        <div className="t_title text-center my-5">
          <span className="">TESTIMONIAL</span>
          <h3 className="">
            What Our <span className='highlight'>Patient Says</span>
          </h3>
        </div>
        <div className="t_content text-center">
          <img src="./t_monial.png" alt="" className="img_1" />
          <h4 className="">Raymond Galario</h4>
          <p className="pera_1 mb-0">Sydney, Australia</p>
          <img src="./t_stars.png" alt="" className="img_2 img-fluid mb-3" />
          <p className="pera_2 w-50 mx-auto mb-5">
            Now you can make an appointment with your doctor anywhere and anytime via online booking easier. Now you can make an appointment
            with your doctor anywhere and anytime via online booking easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
