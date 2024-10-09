import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counters = () => {
    const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true });
    const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
    const { ref: peopleRef, inView: peopleInView } = useInView({ triggerOnce: true });
    const { ref: developersRef, inView: developersInView } = useInView({ triggerOnce: true });

    return (
        <div className='w-[100%] h-auto md:p-4'>
            <div className='w-[100%] h-auto text-white rounded-2xl' data-aos="fade-up" data-aos-delay="100">

                <div className='w-[100%] p-4 pt-8'>
                    <div className='p-8 flex flex-col justify-center lg:gap-20 gap-8 sm:flex-col lg:flex-row flex-wrap whitespace-nowrap'>
                        <div className='flex flex-col justify-between lg:justify-evenly lg:gap-20 gap-8 sm:flex-row' data-aos="fade-up" data-aos-delay="200">
                            <div ref={clientsRef} className='w-full md:w-[250px] mb-4' data-aos="fade-up" data-aos-delay="200">
                                <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-border text-[#26282B]' >
                                    {clientsInView && <CountUp end={850} duration={3} />}+
                                </h2>
                                <h3 className='text-xl font-semibold text-center tracking-wider'>Exquisite Apartments</h3>
                            </div>
                            <div ref={projectsRef} className='w-full md:w-[250px] mb-4' data-aos="fade-up" data-aos-delay="300">
                                <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-border text-[#26282B]'>
                                    {projectsInView && <CountUp end={950} duration={3} />}+
                                </h2>
                                <h3 className='text-xl font-semibold text-center tracking-wider'>Opulent Homes</h3>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between lg:justify-evenly lg:gap-20 gap-8 sm:flex-row' data-aos="fade-up" data-aos-delay="200">
                            <div ref={peopleRef} className='w-full md:w-[250px] mb-4' data-aos="fade-up" data-aos-delay="400">
                                <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-border text-[#26282B]'>
                                    {peopleInView && <CountUp end={18} duration={3} />}K+
                                </h2>
                                <h3 className='text-xl font-semibold text-center tracking-wider'>Contented Visitors</h3>
                            </div>
                            <div ref={developersRef} className='w-full md:w-[250px] mb-4' data-aos="fade-up" data-aos-delay="500">
                                <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-border text-[#26282B]'>
                                    {developersInView && <CountUp end={2} duration={3} />}K+
                                </h2>
                                <h3 className='text-xl font-semibold text-center tracking-wider'>Delighted Owners</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Counters;
