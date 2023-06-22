import React from 'react';
import myImage2 from '../assets/kids.svg'; // Replace '../path/to/your/image.jpg' with the actual path to your image
import myImage3 from '../assets/kid2.svg'; // Replace '../path/to/your/image.jpg' with the actual path to your image

const SimpleDiv = () => {
  return (
   <div className='flex justify-center bg-gray-900'>
   <h1 className="text-6xl font-bold text-transparent p-6  flex-center rounded-xl  mb-10  bg-black  text-purple-500 absolute z-30">Features</h1>
    <div className='flexbox inline-flex m-10 space-x-3 mt-32 justify-items-stretch overflow-hidden'>  
     <div className="bg-black  backdrop-filter backdrop-blur-xl  backdrop:filter backdrop-blur-50  bg-opacity-20 shadow-white-lg hover:border border-purple-500 text-white justify-evenly p-6  flex-box rounded-lg">
     <div className="lg:w-1/2">
          <img src={myImage3} alt="My Image" className="w-full h-auto z-9999 rounded-lg flex-shrink" />
          </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lacus id arcu sollicitudin congue non id ligula. Maecenas bibendum aliquet augue non vestibulum. Morbi vel molestie massa. Donec vulputate odio purus, non commodo nisl ultricies eu. Sed vulputate lorem vitae ultricies lobortis. Sed sit amet malesuada ipsum, at lacinia urna. Ut gravida scelerisque nunc et scelerisque.</p>
    </div>
    <div className="bg-black  backdrop-filter backdrop-blur-xl  backdrop:filter backdrop-blur-50  bg-opacity-20 shadow-white-lg hover:border border-purple-500 transition-opacity text-white  p-6 flex-box rounded-lg">
    <div className="lg:w-1/2">
          <img src={myImage2} alt="My Image" className="w-full h-auto z-9999 rounded-lg flex-shrink" />
          </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lacus id arcu sollicitudin congue non id ligula. Maecenas bibendum aliquet augue non vestibulum. Morbi vel molestie massa. Donec vulputate odio purus, non commodo nisl ultricies eu.</p>
    </div>
    <div className="bg-black  backdrop-filter backdrop-blur-xl  backdrop:filter backdrop-blur-50  bg-opacity-20 shadow-white-lg hover:border border-purple-500 transition-opacity text-white  p-6 flex-box rounded-lg">
    <div className="lg:w-1/2">
          <img src={myImage2} alt="My Image" className="w-full h-auto z-9999 rounded-lg flex-shrink" />
          </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lacus id arcu sollicitudin congue non id ligula. Maecenas bibendum aliquet augue non vestibulum. Morbi vel molestie massa. Donec vulputate odio purus, non commodo nisl ultricies eu.</p>
    </div>
    </div>
    </div>
  );
};

export default SimpleDiv;
