import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from "../assets/dj.jpeg"

// Dummy sponsors data
const sponsors = [
  { name: 'Sponsor 1', logo: Logo },
  { name: 'Sponsor 2', logo: Logo },
  { name: 'Sponsor 3', logo: Logo },
  { name: 'Sponsor 4', logo: Logo },
  { name: 'Sponsor 5', logo: Logo },
  { name: 'Sponsor 6', logo: Logo },
  { name: 'Sponsor 7', logo: Logo },
  // Add more sponsors
];

const Sponcers = () => {
  // Slider settings
  const settings = {
    dots: false, // Enable dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 6, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay the slides
    autoplaySpeed: 2000, // Autoplay speed
    arrows: true, // Show next/prev arrows
  };

  return (
    <div className='w-full bg-secondary py-8 pt-14'>
      <div className="w-[90%] mx-auto ">
        {/* <h2 className="text-xl font-bold text-center mb-8">Our Sponsors</h2> */}
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="text-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="mx-auto w-28 h-28 rounded-[50%] border-2 border-primary p-1 object-cover"
              />
              <p className="mt-2 text-lg text-white">{sponsor.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sponcers;
