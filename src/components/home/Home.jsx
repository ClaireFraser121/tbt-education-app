import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Typewriter = () => {
  useEffect(() => {
    const words = [
      "The Badda Trust Saturday School",
      "Ages 8-13",
      "Martial Arts",
      "Maroon Studies",
      "Music Production",
      "Law Studies",
      "For More Information",
      "Email:",
      "thebaddatrust@gmail.com."
    ];
    const pauseDurations = [100, 50, 50, 3000, 8000, 2000, 500, 500, 250]; // Specify pause durations in milliseconds
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      currentWord = words[i];
      if (isDeleting) {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
          setTimeout(type, pauseDurations[i]);
        } else {
          setTimeout(type, 100);
        }
      } else {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
          setTimeout(type, pauseDurations[i]);
        } else {
          setTimeout(type, 100);
        }
      }
    }

    type();
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold text-white"></h1>
    </div>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero Video Section */}
      <header className="relative h-screen overflow-hidden">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="src/videos/VID-20240201-WA0002.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Typewriter />
      </header>
      {/* Main Content */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded  sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h1 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Unlocking Potential,
                <br className="hidden md:block" />
                Empowering {' '}
                <span className="inline-block text-deep-purple-accent-400">
                  Young Minds
                </span>
              </h1>
            </div>
            
            <div className="lg:w-1/2">
              <p className="mb-5 text-gray-800 text-1xl">
                <span className="font-bold">At TBT Education</span>, we breathe life into learning with captivating activities designed for children aged 7-14. Dive into our platform and enjoy:
                <br /><br />
                <b>Fun Facts -</b> Black History interactive cards for an enlightening experience
                <br />
                <b>Weekly quizzes -</b> for an interactive challenge to test your knowledge
                <br />
                <b>Did You Know -</b> Discover fascinating facts on our YouTube video page
                <br />
                <b>Righteous Reading -</b> Embark on a literary journey by exploring our dedicated book page. Knowledge and inspiration at your fingertips!
                <br /><br />
                Discover the transformative power of focused learning, where each activity is a step towards unlocking their full potential.
                <br /><br />
                <span className="font-bold">Education that Inspires. Empowerment that Lasts. 🚀</span>
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Sections */}
      <div className="bg-gray-950">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          {/* Featured Content */}
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-gray-800"
            >
              {/* Circles for Background */}
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
          {/* Featured Links Did You Know */}
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/DidYouKnowTV" className="px-10 py-20 text-center transition duration-300 transform bg-red-400 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/did_you_know_icons.png" alt="Did You Know Icon" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Watch
              </p>
            </Link>
            {/* Featured Link Fun Facts */}
            <Link to="/FunFacts" className="px-10 py-20 text-center transition duration-300 transform bg-green-400 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/fun_facts_icons.png" alt="Fun Facts Icon" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Discover
              </p>
            </Link>
            {/* Featured Link Righteous Reading */}
            <Link to="/RighteousReading" className="px-10 py-20 text-center transition duration-300 transform bg-yellow-400 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/righteous_reading_icon.png" alt="Righteous Reading Icon" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Learn
              </p>
            </Link>
            {/* Featured Link Weekly Quiz */}
            <Link to="/GetQuiz" className="px-10 py-20 text-center transition duration-300 transform bg-blue-400 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <img src="images/weekly_quiz_icon.png" alt="Weekly Quiz Icon" className="mx-auto mb-4" style={{ maxWidth: '80%', maxHeight: '80%' }} />
              <p className="font-semibold text-gray-200">
                Fun
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
