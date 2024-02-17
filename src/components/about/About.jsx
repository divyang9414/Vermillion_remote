import React from 'react'
import './about.css'

const About = () => {
    return (
        <section id="about" className=''>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='happy_clnt text-center'>
                            <h6 className=''>Our Happy Clients</h6>
                            <p className='d-inline-block mb-3'>150+ clients</p>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src="./Ellipse_203.png" alt="" className='' />
                                <img src="./Ellipse_204.png" alt="" className='hpy_clnt' />
                                <img src="./Ellipse_205.png" alt="" className='hpy_clnt' />
                                <img src="./Ellipse_206.png" alt="" className='hpy_clnt' />
                            </div>
                        </div>
                        <h2 className='text-center ps-5'>About Company</h2>
                        <img src="./about_one.png" alt="" />
                    </div>
                    <div className="col">
                        <span className='about_title'>ABOUT HOSPITAL</span>
                        <h2 className='about_headline mb-4'>Super <span className='highlight'>Speciality</span> Hospital Of South Gujarat.</h2>
                        <p className='mb-4'>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care. With time it has become best kidney hospital in SURAT. Hospital with all facilities under one roof provides for greater efficiency in meeting the overall needs of a patient.
                        <br />
                        <br />
                        patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology.</p>
                        <a href="#mk_apmt" className="mk_apmt_btn scrollto d-none d-lg-inline-block">Make Appointment</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
