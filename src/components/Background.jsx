import React from 'react';

const BackgroundComponent = () => {
  return (
    <div className="relative ">
      <div className="background absolute z-10 h-300 w-300 bg-gradient-to-tb from-blue-600 top-5 left-15 opacity-40   transition duration-100">
      </div>
      <div className="background1 absolute z-10 h-300 w-300 bg-gradient-to-br from-white top-2 left-68 opacity-40   transition duration-100">
      </div>
    </div>
  );
};

export default BackgroundComponent;
