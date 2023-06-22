import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
        <div className="flex-shrink-0">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white absolute z-30">NETWERK</h1>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
            <a
                href="#"
                className="text-gray-300  bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  p-4 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300  bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  p-4 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-300  bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  p-4 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                AboutUs
              </a>
              <a
                href="#"
                className="text-gray-300  bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  p-4 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-300  bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  p-4 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </a>
              
            </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
