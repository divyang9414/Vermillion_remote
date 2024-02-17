import React from 'react'
import './contact_us.css'

const Contact_us = () => {
    return (
        <section id="c_us" className=''>
            <div className="container">
                <div className="row">
                    <div className="col c_us_left">
                        <div className='prtnr_collabs'>
                            <h2>🤝</h2>
                            <h4 className=''><b>25+</b></h4>
                            <p className='d-inline-block mb-0'>Partner Collaboration</p>
                        </div>
                        <img src="./about_two.png" alt="" />
                        <img className='blur_star' src="./blur_star.png" alt="" />
                    </div>
                    <div className="col pt-5">
                        <span className='c_us_title'>CONTACT US</span>
                        <h2 className='c_us_headline mb-4'>True <span className='highlight'>Healthcare</span> For Your Family!</h2>
                        <p className='mb-4'>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care.</p>
                        <h3 className='c_us_headline_mini'>Our support services inclide:</h3>
                        <div className='c_us_ul'>
                            <ul>
                                <li>ESWL - Lithotripsy</li>
                                <li>Cystolitholapaxy</li>
                                <li>HOLEP</li>
                            </ul>
                            <ul>
                                <li>Endoscopic Surgery</li>
                                <li>Open Surgery</li>
                                <li>RIRS</li>
                            </ul>
                        </div>
                        <p>Contact us today to learn more about our support services and to find out how we can help you.</p>
                        <a href="#c_us_btn" className="c_us_btn scrollto d-none d-lg-inline-block">Contact Us</a>
                    </div>
                </div>
                <div className='text-center'>
                    <img className='c_us_srvs' src="./services.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Contact_us
