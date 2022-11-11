import React from 'react';



import AllServices from '../AllServices/AllServices';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
           
           <Features></Features>
            <AllServices></AllServices>
            
            
        </div>
    );
};

export default Home;