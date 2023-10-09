import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";

import BackgroudImage from "../assets/images/bg/4.jpg";

import Services from "../component/Services";
import About from "../component/About";
import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Portfolio from "../component/Portfolio";
import Review from "../component/Testimonial";
import Switcher from "../component/Switcher";

/**
 * Index Three 
 */
export default function IndexThree() {

    const [isOpen, setMenu] = useState(true);
    window.addEventListener("scroll", windowScroll);

    const toggleMenu = () => {
        setMenu(!isOpen)
    }

    /**
     * Window scroll
     */
    function windowScroll() {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("is-sticky");
        } else {
            navbar.classList.remove("is-sticky");
        }
    }

    return (
        <>
            <div>
                <nav className="navbar" id="navbar">
                    <div className="container flex flex-wrap items-center justify-end">
                        <a className="navbar-brand" href="index.html">
                            <span className="inline-block dark:hidden">
                                <img src={LogoDark} className="l-dark" alt="" />
                                <img src={LogoLight} className="l-light" alt="" />
                            </span>
                            <img
                                src={LogoLight}
                                className="hidden dark:inline-block"
                                alt=""
                            />
                        </a>

                        <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                            <ul className="list-none menu-social mb-0">
                                <li className="inline ms-1">
                                    <Link2 to="#">
                                        <span className="login-btn-primary">
                                            <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                                <i className="uil uil-github"></i>
                                            </span>
                                        </span>
                                        <span className="login-btn-light">
                                            <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                                <i className="uil uil-github"></i>
                                            </span>
                                        </span>
                                    </Link2>
                                </li>
                                <li className="inline ms-1">
                                    <Link2 to="#">
                                        <span className="login-btn-primary">
                                            <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                                <i className="uil uil-twitter"></i>
                                            </span>
                                        </span>
                                        <span className="login-btn-light">
                                            <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                                <i className="uil uil-twitter"></i>
                                            </span>
                                        </span>
                                    </Link2>
                                </li>
                                <li className="inline ms-1">
                                    <Link2 to="#">
                                        <span className="login-btn-primary">
                                            <span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white">
                                                <i className="uil uil-instagram"></i>
                                            </span>
                                        </span>
                                        <span className="login-btn-light">
                                            <span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                                                <i className="uil uil-instagram"></i>
                                            </span>
                                        </span>
                                    </Link2>
                                </li>
                            </ul>
                            <button
                                data-collapse="menu-collapse"
                                type="button"
                                className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Navigation Menu</span>
                                <i className="mdi mdi-menu mdi-24px"></i>
                            </button>
                        </div>

                        <div
                            className={`${isOpen === true ? 'hidden' : 'block'} navigation lg_992:order-1 lg_992:flex`}
                            id="menu-collapse"
                        >
                            <ul className="navbar-nav nav-light" id="navbar-navlist">
                                <Link
                                    className="nav-item"
                                    to="home"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Home</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="about"
                                >
                                    <span className="nav-link">About us</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="features"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Services</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="portfolio"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Portfolio</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="testi"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Review</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="pricing"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Pricing</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="blog"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Blog</span>
                                </Link>
                                <Link
                                    className="nav-item"
                                    to="contact"
                                    activeclassname="active"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <span className="nav-link">Contact us</span>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section
                    style={{ backgroundImage: `url(${BackgroudImage})` }}
                    className="py-36 md:py-72 w-full table relative bg-center bg-cover jarallax" data-jarallax data-speed="0.5" id="home">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center">
                            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Do you want to change the world?</h4>

                            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                            <div className="text-center subcribe-form mt-4 pt-2">
                                <form className="relative mx-auto">
                                    <input type="email" id="subemail" name="email" className="rounded-full bg-white opacity-70 border" placeholder="E-mail :" />
                                    <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full">Submit <i className="uil uil-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About section */}
                <About />

                {/* Service section */}
                <Services />

                {/* Portfolio section */}
                <Portfolio />

                {/* Review section */}
                <Review />

                {/* Pricing section */}
                <Pricing />

                {/* Blog section */}
                <Blog />

                {/* Contact section */}
                <Contact />

                {/* Footer section */}
                <Footer />

                {/* Switcher section */}
                <Switcher />
            </div>

        </>
    );

}
