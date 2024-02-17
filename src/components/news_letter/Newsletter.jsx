import React from 'react';
import './news_letter.css'

const Newsletter = () => {
  return (
    <section className="news_letter">
      <div className="container">
        <div className="newsletter_content">
          <h2>Newsletter</h2>
          <span>Get Smarter About No-Code</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero a minus facere! Ducimus repudiandae quae, fugiat</p>
          <input type="email" placeholder="Enter Your Email" />
          <a href="#subscribe" className="subscribe_btn scrollto d-none d-lg-inline-block">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
