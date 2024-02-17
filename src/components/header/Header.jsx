import React from 'react'
import './header.css'
import '../Remixicon/remixicon.css'

const Header = () => {
    return (
        <header id="header">
            <div className="container d-flex align-items-center justify-content-between">
                <a href="javascript:void(0)"><img className="me-auto me-lg-0" src='./logo.png'></img></a>
                <nav id="navbar" className="navbar">
                    <ul className='nav_ul1'>
                        <li><a className="nav-link scrollto active" href="#home">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li className="dropdown"><a href="#medical_services"><span>Medical services</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="javascript:void(0)">Service 1</a></li>
                                <li className="dropdown"><a href="javascript:void(0)"><span>Service 2</span> <i className="ri-arrow-right-s-line"></i></a>
                                    <ul>
                                        <li><a href="javascript:void(0)">Sub Service 1</a></li>
                                        <li><a href="javascript:void(0)">Sub Service 2</a></li>
                                        <li><a href="javascript:void(0)">Sub Service 3</a></li>
                                        <li><a href="javascript:void(0)">Sub Service 4</a></li>
                                        <li><a href="javascript:void(0)">Sub Service 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">Service 3</a></li>
                                <li><a href="javascript:void(0)">Service 4</a></li>
                                <li><a href="javascript:void(0)">Service 5</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#career">Career</a></li>
                        <li><a className="nav-link scrollto" href="#news">News</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    {/* <ul className='nav_ul2'>
                        <li><a className="nav-link scrollto active" href="#home">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#medical_services">Medical services</a></li>
                        <li><a className="nav-link scrollto" href="#career">Career</a></li>
                        <li><a className="nav-link scrollto" href="#news">News</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul> */}
                </nav>
                <a href="#make_appointment" className="make_appointment_btn scrollto">Make Appointment</a>
                <i class="ri-menu-fill mobile_nav_toggle"></i>
            </div>
        </header>
    )
}

export default Header
