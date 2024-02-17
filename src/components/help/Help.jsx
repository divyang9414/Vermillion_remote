import React, { useState } from 'react';
import './help.css'

const Help = () => {
    const [isSubmited, setIsSubmited] = useState(false);

    const submited = (e) => {
        e.preventDefault();
        setIsSubmited(true);
    };

    return (
        <section id='help'>
            <div className="container">
                <div className="help">
                    <div className="row">
                        <div className="col-md-6 hlp_lft">
                            <span className='help_title'>HELP</span>
                            <h2 className='help_headline mb-4'>A <span className='highlight'>Dialysis Patient’s</span> Life Is Hard. Laugh Harder.</h2>

                            <h3 className='help_headline_mini'>Our support services inclide:</h3>
                            <p className='mb-4'>Today the hospital is recognised as a world-renowned institution, not only providing outstanding care and treatment, our goal is to deliver quality care in a respectful & compassionate manner. We strive to be the first and best choice for healthcare.</p>
                            <ul>
                                <li>A family history of stone disease</li>
                                <li>Stones caused by an infection in your urinary system</li>
                                <li>A genetic condition which makes you prone to forming stones</li>
                                <li>A cyst or a condition called calyceal diverticulum</li>
                                <li>Swelling in one of your ureters, called ureterocele</li>
                            </ul>
                        </div>
                        <div className="col-md-6 hlp_rgt">
                            {isSubmited ? (
                                <div className="d-flex text-center justify-content-center align-items-center h-100">
                                    <span className="h1 fs-1">Your Form is successfully Submited. Thank You.</span>
                                </div>
                            ) : (
                                <>
                                    <h2 className="SubTitle">How Can We Help?</h2>
                                    <p className="text">
                                        Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.
                                    </p>

                                    <form className="formOuter" onSubmit={submited}>
                                        <input className="formInput me-2" type="text" placeholder="Name" />
                                        <input className="formInput ms-2" type="email" placeholder="Email" />
                                        <input className="formInput me-2" type="tel" placeholder="Phone number" />
                                        <input className="formInput ms-2" type="email" placeholder="Subject" />

                                        <textarea className="formTextArea" placeholder="Message" rows="6"></textarea>
                                        {/* <a href="#hlp_submit" className="hlp_submit_btn scrollto d-none d-lg-inline-block py-3">Submit Request</a> */}
                                        <button type="submit" className='hlp_submit_btn scrollto d-none d-lg-inline-block py-3 fs-4'>Submit Request</button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Help;
