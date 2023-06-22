import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';


const SocialLinksList = () => {
  return (
    <div className='bg-purple-600'>
    <div className="flex justify-center items-center h-50  p-4  bg-black flex-col lg:flex-row  z-5 backdrop-blur-4xl opacity-75  filter">
    <div className="flex">
        <SocialButton>
          <FaFacebook className='text-blue-400 hover:text-blue-500' />
        </SocialButton>
        <SocialButton>
          <FaTwitter className='text-blue-600 hover:text-blue-800'/>
        </SocialButton>
        <SocialButton>
          <FaInstagram className='text-pink-600 hover:text-pink-800 border-white'/>
        </SocialButton>
        <SocialButton>
          <FaYoutube className='text-red-500 hover:text-red-600'/>
        </SocialButton>
        <SocialButton>
          <FaGithub className='text-gray-800 hover:text-black'/>
        </SocialButton>
      </div>
    </div>
    <div className='text-xs flex justify-center items-center text-white  bg-black flex-col lg:flex-row  z-5 backdrop-blur-4xl opacity-75  filter p-5'>Made in hurry 😬 by  <a> @NERDS</a></div>
    </div>
  );
};

const SocialButton = ({ children }) => {
  return (
    <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-2xl text-gray-800 m-2 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-700">
      {children}
    </button>
  );
};

export default SocialLinksList;
