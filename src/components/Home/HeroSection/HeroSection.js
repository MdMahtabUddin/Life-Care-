import React from 'react';
// import './HeroSection.css';
import doctors from '../../../images/doctors.png';
// import Features from '../Features/Features';

// import Typist from 'react-typist';
// import { NavLink } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
// import { Parallax } from 'react-parallax';


const HeroSection = () => {
    return (
        <section className='bg-green-600'>
      <div className='container mx-auto bg-green-600'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* hero text */}
          <div className='flex-1'>
            {/* badge text */}
            <div
              className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              <div className='flex items-center justify-between text-sm lg:text-base'>
                <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>
                  15% SAVE for Medical CheckUp
                </div>
                {/* <div>For the Black Friday weekend</div> */}
              </div>
            </div>
            {/* title */}
            <h1
              className='text-[32px] text-gray-100 lg:text-[64px] font-bold leading-tight mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              A hospital is no place to be  <span className=' font-extrabold text-yellow-400'>Sick</span>
              
            </h1>
            <p
              className='max-w-[440px] leading-relaxed mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              
Best in the Country for Health CheckUp <span className='font-bold text-yellow-400 underline-offset-1'></span>
            </p>
            
          </div>
          {/* hero image */}
          <div className='flex-1'>
            <img src={doctors} alt='' data-aos='fade-up' data-aos-delay='600' />
          </div>
          
        </div>
      </div>
      
    </section>
    );
};

export default HeroSection;