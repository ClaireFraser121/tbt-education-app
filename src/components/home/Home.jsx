import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';


const Home = () => {
  return (
    <>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="public/images/HomePageImage.png"
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
  <div>
    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
      Welcome To
    </p>
  </div>
  <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
  Unlocking Potential, Empowering Young Minds
</h5>
<p className="mb-5 text-gray-800">
  <span className="font-bold">At TBT Education</span>, we breathe life into learning with captivating activities designed for children aged 7-14. Dive into our platform and enjoy:
  <br /><br />
  - <b>Fun Facts:</b> Black History interactive cards for an enlightening experience
  <br />
  - Engage in <b>weekly quizzes</b> for an interactive challenge
  <br />
  - Discover fascinating facts on our YouTube <b>'Did You Know'</b> video page
  <br />
  - Embark on a literary journey by exploring our dedicated book page, aptly named <b>'Righteous Reading.'</b> Discover a world of knowledge and inspiration at your fingertips!
  <br /><br />
  Discover the transformative power of focused learning, where each activity is a step towards unlocking their full potential.
  <br /><br />
  <span className="font-bold">Education that Inspires. Empowerment that Lasts. 🚀</span>
</p>
<div className="flex items-center">
  <Link
      to="/about" // Specify the path to the "About" page
      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    >
      Learn More
      <svg
        className="inline-block w-3 ml-2"
        fill="currentColor"
        viewBox="0 0 12 12"
      >
        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
      </svg>
    </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-gray-800"
            >
              <circle
                fill="currentColor"
                fillOpacity="0.4"
                cx="44"
                cy="44"
                r="15.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">
                Did You Know TV Icon
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">
                Fun Facts Icon
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">
                Righteous Reading Icon
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">
                Weekly Quiz Icon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
