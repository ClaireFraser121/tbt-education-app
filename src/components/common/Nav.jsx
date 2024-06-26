import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../images/tbt_logo_update.png";
import './../../styles/Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#f6d980] p-2">
      <div className="flex flex-1 items-center justify-start">
        <div className="block lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-[#262626] border-[#262626] hover:text-[#f7f1db] hover:border-[#f7f1db]"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zM10 9h10v2H10zM0 15h20v2H0z"/></svg>
          </button>
        </div>

        <div className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:w-auto`}>


          <Link to="/home" className=" whitespace-nowrap font-bold font-sans block mt-4 lg:inline-block lg:mt-0 text-[#262626] hover:text-[#f7f1db]  mx-2">
            Home
          </Link>
          <Link to="/About" className="whitespace-nowrap font-bold font-sans block mt-4 lg:inline-block lg:mt-0 text-[#262626] hover:text-[#f7f1db]  mx-2">
            About
          </Link>
          <Link to="/DidYouKnowTV" className="whitespace-nowrap font-bold font-sans block mt-4 lg:inline-block lg:mt-0 text-[#262626] hover:text-[#f7f1db]  mx-2">
            Did You Know TV
          </Link>
          <Link to="/FunFacts" className="whitespace-nowrap font-bold font-sans block mt-4 lg:inline-block lg:mt-0 text-[#262626] hover:text-[#f7f1db] mx-2">
            Fun Facts
          </Link>
          <Link to="/RighteousReading" className="whitespace-nowrap font-bold font-sans block mt-4 lg:inline-block lg:mt-0 text-[#262626] hover:text-[#f7f1db] mx-2">
            Righteous Reading
          </Link>
          <Link to="/GetQuiz" className="whitespace-nowrap font-bold font-sans block mt-4 lg:inline-block lg:mt-0 text-[#262626] hover:text-[#f7f1db] mx-2">
            Weekly Quiz
          </Link>
          
        </div>
      </div>

      <div className="flex-1 text-center">
        <span className=" font-sans text-3xl font-extrabold tracking-tight text-[#262626]">TBT Education App</span>
      </div>

      <div className="flex flex-1 justify-end items-center">
        <img className='h-16' src={logo} alt="tbt logo" />
      </div>
    </nav>
  );
}

export default Nav;
