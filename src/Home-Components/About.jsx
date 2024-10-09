import React, { useEffect } from "react";
import Image1 from '../assets/img-1.jpeg';
import Image2 from '../assets/img-2.jpeg';
import { IoHome } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);

    return (
        <div className='w-full min-h-screen py-14 px-4'>
            <div className='w-[90%] mx-auto flex flex-col items-center'>
                <div className='w-full text-center lg:text-left' data-aos="fade-up" data-aos-delay="300">
                    <h1 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
                        About <span className='text-[#EBCFA7]'>Cocotown Realtors</span>
                    </h1>
                    <div className='text-base lg:text-lg text-gray-400 leading-7 mb-4'>
                        <p className='mb-4'>
                            Cocotown Realtors is a premier real estate company committed to helping individuals and families find their dream properties. We provide exceptional service and unmatched expertise in the local real estate market, offering a wide range of properties to meet your needs.
                        </p>
                    </div>
                </div>
                {/* Image Row */}
                <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-10 py-4' data-aos="fade-up" data-aos-delay="300">
                    {/* First Image Container */}
                    <div className='w-full lg:w-1/2 relative border border-[#EBCFA7] py-4 px-2 border-opacity-50 shadow-lg'>
                        <img
                            src={Image1}
                            alt="Real Estate"
                            className='w-[80%] h-[300px] mx-auto object-cover rounded-md'
                        />
                    </div>

                    {/* Enhanced Center Divider */}
                    <div className='flex flex-col items-center mx-6 lg:mx-8'>
                        {/* Decorative Circle in the Center */}
                        <div className='hidden md:block relative'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-[#EBCFA7] text-[#26282B] text-2xl shadow-md'>
                                {/* Icon in the center (house icon as an example) */}
                                <IoHome />
                            </div>
                        </div>

                        {/* Vertical Dotted Line */}
                        <div className='h-[200px] w-[2px] bg-dotted bg-[#EBCFA7] opacity-70 mt-4'></div>
                    </div>

                    {/* Second Image Container */}
                    <div className='w-full lg:w-1/2 relative border border-[#EBCFA7] py-4 px-2 border-opacity-50 shadow-lg'>
                        <img
                            src={Image2}
                            alt="Real Estate"
                            className='w-[80%] h-[300px] mx-auto object-cover rounded-md'
                        />
                    </div>
                </div>


                <div className='text-base lg:text-lg text-gray-400 leading-7 mb-4' data-aos="fade-up" data-aos-delay="300">
                    <p className='mb-4'>
                        Whether you're looking to buy your first home, invest in real estate, or sell your property, we ensure a smooth, hassle-free experience from start to finish. Our experienced team is here to guide you every step of the way.
                    </p>
                    <p>
                        Join us at Cocotown Realtors and turn your real estate dreams into reality.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default About;
