import React from 'react';
import { Link } from 'react-router-dom';
import '../common/Footer.css';
import youtubeIcon from "./../../images/youtube.png";
import instagramIcon from "./../../images/instagram.png";
import githubIcon from "./../../images/github.png";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between bg-[#262626] p-6">
      <div className="flex flex-1 items-center">
        <span className="font-semibold text-xl tracking-tight text-[#FFFFFF]">TBT Education App</span>
      </div>

      <div className="flex flex-1 justify-center">
        <Link to="/home" className="whitespace-nowrap text-[#FFFFFF] hover:text-[#f7f1db] mx-2">
          Home
        </Link>
        <Link to="/About" className="whitespace-nowrap text-[#FFFFFF] hover:text-[#f7f1db] mx-2">
          About
        </Link>
      </div>

      <div className="flex flex-1 justify-end items-center">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="h-8 w-8 rounded-full mx-1" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="h-8 w-8 rounded-full mx-1" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="h-8 w-8 rounded-full mx-1" />
        </a>
      </div>
     
       <p className='text-sm'>&copy; 2024 TBT Education App</p> 
    </footer>
  );
}

export default Footer;
