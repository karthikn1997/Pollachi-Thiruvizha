import React, { useState, useEffect } from "react";
import Worker from "../assets/ab.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeAbout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);

    return (
        <div className='w-full min-h-[60vh] flex flex-col lg:flex-row justify-center items-center overflow-hidden'>
            <div className='w-full lg:w-[50%] h-[40vh] sm:h-[60vh] bg-[#EBCFA7] flex flex-col justify-center items-center' data-aos="slide-right" data-aos-delay="300">
                <div className='w-full md:w-[70%] p-6 md:p-0 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <h1 className='uppercase text-sm md:text-lg tracking-wider text-gray-500 '>cocotown realtors Company</h1>
                    <p className='tracking-wider text-[#26282B] text-3xl md:text-4xl font-bold text-center lg:text-left'>Your New Plot is Waiting </p>
                    <p className='text-[#26282B] text-lg my-4 text-center lg:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati, molestias aliquam odio tenetur dignissimos consequatur omnis possimus ratione est tempora illo, magni consequuntur, quidem cum ea unde eveniet nemo.</p>
                    <button className=' py-2 px-6 border-2 border-[#26282B] text-[#26282B] text-lg md:text-xl tracking-wider rounded-3xl hover:bg-[#26282B] hover:text-[#EBCFA7] hover:border-[#EBCFA7] font-bold'>About Us</button>
                </div>
            </div>
            <div className='w-full lg:w-[50%] h-[40vh] sm:h-[60vh] overflow-hidden' data-aos="slide-left" data-aos-delay="300">
                <img src={Worker} className="w-full h-[40vh] sm:h-[60vh] object-cover" alt="" />
            </div>
        </div>
    )
}

export default HomeAbout;
