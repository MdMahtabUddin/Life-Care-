import React from 'react';



import AllServices from '../AllServices/AllServices';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import AboutUs from '../../AboutUs/AboutUs'

const Home = () => {
    return (
        <div >
            <HeroSection></HeroSection>
           
           <Features></Features>
           <AboutUs></AboutUs>
            <AllServices></AllServices>
            
            
            
        </div>
    );
};

export default Home;