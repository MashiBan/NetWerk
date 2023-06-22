import React from 'react';
import myImage from '../assets/undraw_connecting_teams_re_hno7.svg'

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-3 m-10 mt-2">Building Networks</h1>
            <p className="text-xl mb-8 ml-10">
              Discover amazing things and explore the world with us. Let's start your journey
              today.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 shadow-xl text-white py-2 m-10 mt-3 px-4 rounded">
              Get Started
            </button>
          </div>

          <div className="lg:w-1/2">
            <img src={myImage} alt="My Image" className="w-full h-auto z-9999 rounded-lg flex-shrink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
