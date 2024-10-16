import React, { useEffect } from 'react';
import Hero from '../Home-Components/Hero';
import HomeAbout from '../Home-Components/HomeAbout';
import Counters from '../Home-Components/Counters';
import Future from '../Home-Components/Future';
import About from '../Home-Components/About';
import Projects from '../Home-Components/Projects';
import AboutThiruvizha from '../Home-Components/AboutThiruvizha';
import Banner from '../Home-Components/Banner';
import ThiruvizhaValues from '../Home-Components/ThiruvizhaValues';
import Gallery from '../Home-Components/Gallery';
import Events from '../Home-Components/Events';
import Sponsors from '../Home-Components/Sponsors';
import Contact from '../Home-Components/Contact';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <Hero />
      <Sponsors />
      <AboutThiruvizha />
      <ThiruvizhaValues />
      <Gallery />
      <Events />
      <Banner />
      <Contact />
    </div>
  );
};

export default Home;
