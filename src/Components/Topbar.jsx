import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Topbar = () => {
    return (
        <>
            <div className="w-full hidden lg:flex flex-col z-50">
                <div className="w-full bg-green-800 text-white md:px-20 text-xs tracking-wider py-1.5">
                    <div className="flex flex-col md:flex-row items-center justify-between ">

                        {/* Left Side: Address and Email */}
                        <div className="w-full lg:w-auto flex justify-around lg:justify-evenly md:justify-center items-center gap-6">
                            <div className="hidden md:flex items-center gap-1 text-[rgb(255,181,36)]">
                                <MdLocationPin className="text-[#EBCFA7] w-4 h-4 rounded-full mt-1" />
                                <a href="#" className="text-white">
                                    1/12, Pollachi, Coimbature
                                </a>
                            </div>
                            <div className="flex items-center gap-1 hover:text-[rgb(255,181,36)]">
                                <IoMdMail className="text-[#EBCFA7] w-4 h-4 rounded-full mt-1" />
                                <a href="#" className="hover:underline underline-offset-4 font-semibold">
                                    cocotownrealtors@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-1 hover:text-[rgb(255,181,36)]">
                                <FaSquarePhone className="text-[#EBCFA7] w-4 h-4 rounded-full " />
                                <p className="tracking-wider">987456321</p>
                            </div>
                        </div>

                        {/* Center: Phone */}


                        {/* Right Side: Social Icons */}
                        <div className="hidden lg:flex items-center mt-2 md:mt-0">
                            <span className="mr-3">24x7 Support</span>
                            <a href="#" className="text-[#EBCFA7] hover:text-[rgb(255,181,36)] border-x-[1px] border-gray-400 px-2">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-[#EBCFA7] hover:text-[rgb(255,181,36)]  px-2">
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-[#EBCFA7] hover:text-[rgb(255,181,36)] border-s-[1px] border-gray-400 px-2">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="text-[#EBCFA7] hover:text-[rgb(255,181,36)] border-x-[1px] border-gray-400 px-2">
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;
