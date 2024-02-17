import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="f_left">
              <h4>Dhameliya Kidney Hospital</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim laboriosam eius voluptate ipsam, error fugit praesentium
                aut modi. Rerum obcaecati deleniti laboriosam nesciunt nisi
              </p>
              <i class="f_s_media ri-facebook-circle-fill"></i>
              <i class="f_s_media ri-instagram-fill"></i>
              <i class="f_s_media ri-linkedin-box-fill"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mid_footer">
              <h5 className="footSubTitle">Get in Touch</h5>
              <p className="f_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur omnis adipisci</p>


                <div className='phone pt-4'>
                    <i class="ri-phone-fill"></i>
                    <span className=''> +91 261 2490001</span>
                </div>
                <div className='d-flex align-items-center py-4'>
                    <div className='location'><i class="ri-map-pin-2-fill"></i></div>
                    <span className=''>402, Aayush Doctor House, Lal Darwaja, Station Road, SURAT 395002-GUJ INDIA</span>
                </div>

              <a href="#">Get Direction <i class="ri-arrow-right-line"></i></a>
              <br />
              <a href="#">Our Branches <i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footerRight">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="footSubTitle">Medical Services</h6>
                  <ul className='m_services'>
                    <li>Kidney Stone</li>
                    <li>Prostate</li>
                    <li>Uro Oncology</li>
                    <li>Paediatric Urology</li>
                    <li>Female Urology</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="footSubTitle">Quick Links</h6>
                  <ul className='q_services'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Medical Services</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_line"></div>
        <p className="cpy_rght">Non Copyrighted @ 2022 Designed and uploaded by Dhameliya Kidney Hospital</p>
      </div>
    </footer>
  );
}

export default Footer;