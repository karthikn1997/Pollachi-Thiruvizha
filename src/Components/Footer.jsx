import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaHeart } from 'react-icons/fa'; // Import icons
import { LuDiamond } from "react-icons/lu";
import ImageBG from "../assets/footer.jpeg"


function Footer() {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="bg-gray-600 text-white md:py-12 relative"
            style={{
                backgroundImage: `url(${ImageBG})`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black overlay with 50% opacity
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-black bg-opacity-50 py-8 md:py-12 border-t-4 border-[#EBCFA7] border-b ">
                <div className="w-full mx-auto flex flex-col justify-center items-center px-6 text-sm sm:text-[16px]">
                    {/* Clinic Overview */}
                    <div className="w-full flex flex-col items-center mb-6" data-aos="fade-right">
                        <h1 className="text-2xl md:text-4xl font-semibold font-nunito mb-2 text-[#EBCFA7] uppercase">
                            cocotown realtors
                        </h1>
                        <p className="text-center text-sm tracking-widest">
                            Build Your Future with Our Plots
                        </p>
                    </div>

                    {/* Grid for 4 Columns */}
                    <div
                        className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 sm:place-items-center "
                        data-aos="fade-up"
                    >
                        {/* Quick Links with Icons */}
                        <div className=" justify-center items-center xs:justify-start xs:items-start" data-aos="fade-right">

                            <ul className="space-y-2 flex flex-col">
                                <h2 className="text-lg font-semibold mb-2 text-left text-[#EBCFA7]">Quick Links</h2>
                                <li className="flex items-center space-x-2">
                                    <FaHome className="text-[#EBCFA7]" />
                                    <Link to="/" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                                        Home Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaInfoCircle className="text-[#EBCFA7]" />
                                    <Link to="/about" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                                        About Us Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaHeart className="text-[#EBCFA7]" />
                                    <Link to="/Transformation" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                                        Products Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaPhone className="text-[#EBCFA7]" />
                                    <Link to="/contact" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                                        Contact Page
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Treatment Sections */}
                        <div className="flex flex-col justify-center items-center xs:justify-start xs:items-start" data-aos="fade-right">

                            <ul className="space-y-2 flex flex-col ">
                                <h2 className="text-lg font-semibold float-left text-left mb-2 text-[#EBCFA7]">Our Projects</h2>
                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-[#EBCFA7]" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className="hover:underline hover:text-blue-300"
                                    >
                                        Project 1
                                    </Link>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-[#EBCFA7]" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className="hover:underline hover:text-blue-300"
                                    >
                                        Project 2
                                    </Link>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-[#EBCFA7]" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className="hover:underline hover:text-blue-300"
                                    >
                                        Project 3
                                    </Link>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-[#EBCFA7]" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className="hover:underline hover:text-blue-300"
                                    >
                                        Project 4
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Address and Timing */}
                        <div className="flex flex-col col-span-2 xs:col-span-1 justify-center items-center xs:justify-start xs:items-start" data-aos="fade-right ">
                            <h2 className="text-lg font-semibold float-left mb-2 text-[#EBCFA7]">Address </h2>
                            <address className="sm:w-[200px] not-italic mb-2 text-center xs:text-left">
                                1/12, Pollachi, Coimbature
                            </address>
                            <p className='mb-2'>
                                <span className="">Tamil nadu, India</span>
                            </p>
                            <p lassName='' >
                                <span className="">cocotownrealtors@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center mt-8" >
                        <p className='text-xs sm:text-sm'>
                            <span className="text-yellow-400">&copy; {new Date().getFullYear()} </span>
                            cocotown realtors. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
