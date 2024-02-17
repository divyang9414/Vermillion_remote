import React from 'react'
import './our_doctors.css'

const Our_Doctors = () => {
  return (
    <section id='our_doctors'>
      <div className="container">
        <div className="row">
          <div className="col pe-5 od_left">
            <span className='od_title'>OUR DOCTOR</span>
            <h2 className='od_headline mb-4'>Meet Our Professional <span className='highlight'>Expert Doctor</span></h2>
            <div className='od_left_data d-flex'>
              <div className="odld_1 w-50">
                <img className='od_1' src="./od_1.png" alt="" />
              </div>
              <div className="w-50">
                <h4>Dr.Christopher Nicks</h4>
                <p>MBBS,FCPS - Cardiologist</p>
                <a href="#learn_more" className="od_learn_more_btn scrollto d-none d-lg-inline-block">Learn More<i class="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>
          <div className="col ps-5 od_right">
            <div className='od_left_data d-flex'>
              <div className="odld_1 w-50">
                <img className='od_1' src="./od_2.png" alt="" />
              </div>
              <div className="w-50">
                <h4>Dr.Christopher Nicks</h4>
                <p>MBBS,FCPS - Cardiologist</p>
                <a href="#od_learn_more" className="od_learn_more_btn scrollto d-none d-lg-inline-block">Learn More<i class="ri-arrow-right-line"></i></a>
              </div>
            </div>
            <h3 className='od_right_bottom_title'>Our Doctors</h3>
              <div>
                <div className="peginetion"><i class="text-white ri-arrow-left-line"></i></div>
                <div className="peginetion"><i class="text-white ri-arrow-right-up-line"></i></div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Our_Doctors
