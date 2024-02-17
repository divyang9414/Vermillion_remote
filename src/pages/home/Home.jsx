import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
      <section id="hero" className="">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='main_box'>
                <h2 className='hero_title mb-4'>Find the good life by <span className='highlight'>good</span> health</h2>
                <p className='w-75 mb-4'>Dhameliya Kidney Hospital has born out of the need for a good centre which catered to patients with complicated kidney diseases in Surat.</p>
                <div className='d-flex mb-5'>
                  <a href="#get_appointment" className="get_appointment_btn scrollto d-none d-lg-inline-block me-3">Make Appointment</a>
                  <a href="#learn_more" className="learn_more_btn scrollto d-none d-lg-inline-block">Learn More</a>
                </div>
                <div className="w-50 hero_doctor">
                  <img src="./doctor.png" alt="" />
                </div>
                <img src="./loose_aerrow.png" alt="" className="abs_img loose_aerrow" />
                <img src="./hospi.png" alt="" className="abs_img hospi" />
              </div>
            </div>

            <div className="col row">
              <div className='col-6'>
                <div className='col-12 d-flex gap-3'>
                  <div className="w-50 box_1">
                    <img src="./medico_kit.png" alt="" width="85px" />
                  </div>
                  <div className="w-50 box_2">
                    <img src="./kidney.png" alt="" width="85px" />
                  </div>
                </div>
                <div className="w-100 box_3">
                  <img className='grid_img_1' src="./doc_1.png" alt="" />
                </div>
                <div className="w-100 box_4 text-center">
                  <div className="d-flex align-items-center justify-content-center text-start mb-3">
                    <div className="doc_4_img me-3">
                      <img src="./doc_4.png" alt="" />
                    </div>
                    <div className="doc_4_data">
                      <h2>Dr. Alex Smith</h2>
                      <span>Infermrdica Hospital</span>
                    </div>
                  </div>
                  <a href="#mk_apmt" className="mk_apmt_btn scrollto d-none d-lg-inline-block">Make Appointment</a>
                </div>
              </div>

              <div className='col-6'>
                <div className="w-100 box_5">
                  <img className='grid_img_2' src="./doc_2.png" alt="" /></div>
                <div className="w-100 box_6">
                  <img className='grid_img_3' src="./doc_3.png" alt="" /></div>                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
