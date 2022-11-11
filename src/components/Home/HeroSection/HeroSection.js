import React from 'react';
import './HeroSection.css';
import doctors from '../../../images/doctors.png';

import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Parallax } from 'react-parallax';


const HeroSection = () => {
    return (
        <section className='bg-green-500'>
      <div className='container mx-auto bg-green-500'>
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
                  75% SAVE
                </div>
                <div>For the Black Friday weekend</div>
              </div>
            </div>
            {/* title */}
            <h1
              className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Fastest & secure platform to invest in crypto.
            </h1>
            <p
              className='max-w-[440px] leading-relaxed mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            {/* <button
              className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              Try for free
              <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
            </button> */}
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