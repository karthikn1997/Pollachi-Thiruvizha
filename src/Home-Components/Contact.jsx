import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Importing social media icons
import ContactImage from '../assets/pollachi-logo.png'; // Replace with your actual image path

const Contact = () => {
    return (
        <div className='w-full bg-secondary' id="contact">
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[500px] bg-secondary p-8 md:p-16 gap-10">
                {/* Left side - Image */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={ContactImage} alt="Contact Us" className="w-full h-full object-cover" />
                </div>

                {/* Right side - Form */}
                <div className="w-full md:w-1/2 p-8 ">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h2>

                    <form className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <input
                                type="text"
                                id="name"
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Mobile No Field */}
                        <div>
                            <input
                                type="tel"
                                id="mobile"
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-black font-semibold py-2 px-4 rounded-md shadow-md hover:bg-yellow-500 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className='w-[90%] bg-primary h-[0.5px] mx-auto'></div>

            {/* Footer Section */}
            <div className='w-[90%] mx-auto h-[20vh] flex flex-col md:flex-row items-center justify-around py-8'>
                {/* Left - Social Media Icons */}
                <div className="flex gap-4 text-white">
                    <FaFacebookF className="hover:text-primary cursor-pointer text-xl" />
                    <FaTwitter className="hover:text-primary cursor-pointer text-xl" />
                    <FaInstagram className="hover:text-primary cursor-pointer text-xl" />
                    <FaLinkedinIn className="hover:text-primary cursor-pointer text-xl" />
                    <FaYoutube className="hover:text-primary cursor-pointer text-xl" />
                </div>

                {/* Right - Contact Information */}
                <div className="text-white text-center md:text-right">
                    <p className="mb-2">+123 456 7890</p>
                    <p className="mb-2">+987 654 3210</p>
                    <p>info@example.com</p>
                </div>
            </div>

            {/* Copyright Text */}
            <div className="w-full bg-secondary text-center py-4 text-white text-sm">
                &copy; 2024 Digital Edge. All Rights Reserved.
            </div>
        </div>
    );
};

export default Contact;
