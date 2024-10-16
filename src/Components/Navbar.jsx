import React, { useState, useEffect } from "react";
import logo from "../assets/pollachi-logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav bg-transparent z-10 top-0 border-b-[1px] border-gray-200 " data-aos="slide-down" data-aos-delay="300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between sm:py-4 py-3">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 text-white">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-[120px] lg:w-[150px]"
                            />
                        </div>
                        <div className="hidden md:block font-semibold text-lg">
                            <div className="-ml-14 flex items-baseline space-x-8">
                                <a href="#home" className="nav-link">
                                    Home
                                </a>
                                <a href="#events" className="nav-link">
                                    Events
                                </a>
                                <a href="#contact" className="nav-link">
                                    Contact
                                </a>
                            </div>
                        </div>
                        <button className="bg-[#89A711] hover:bg-gradient-to-l text-white font-semibold py-2  px-8 rounded-xl transition duration-300 border-[2px] border-primary whitespace-nowrap shadow-xl">
                            <div className="flex items-center gap-3 font-bold text-xl text-white hover:text-black">
                                <span className="text-lg lg:text-xl text-white" style={{ textShadow: "2px 2px 0px black" }}>
                                    Book Now
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#26282B]  focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-200 flex justify-center items-center">
                    <div className="px-2 py-2 pb-4 space-x-2 xxs:space-x-4 sm:space-x-8 sm:px-3 text-[14px] sm:text-[16px] font-semibold">
                        <a href="#home" className="nav-link">
                            Home
                        </a>
                        <a href="#events" className="nav-link">
                            Events
                        </a>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
