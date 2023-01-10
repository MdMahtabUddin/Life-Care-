import React from 'react';
// import './Footer.css';
// import { footer } from '../../data';
// import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';


const Footer = () => {
  // const { logo, address, email, phone, list1, list2, socialList } = footer;
    return (
      <footer className="bg-gray-100 text-black">
      <div className="content-center md:px-10 xl:px-40 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          
        </div>
        <div className="flex justify-center">
          <div className="text-center">
            
            <div>Copyright &copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;