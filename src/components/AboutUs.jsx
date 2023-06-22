import React from 'react';
import myImage1 from '../assets/undraw_feeling_proud_qne1.svg';

const AboutUsSection = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" flexbox  justify-center ">
            <h2 className="text-6xl font-bold mb-4  text-transparent  bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-yellow-300">AboutUs</h2>
            </div>
            <div className='p-6  text-white justify-evenly flex-box rounded-lg'>
            <img src={myImage1} alt="My Image" className="w-48 h-auto z-9999 rounded-lg  flex-shrink" />
            <p className="text-lg p-6 text-white mb-2">
              Suspendisse eu leo suscipit, semper nisi at, iaculis elit.  Phasellus id facilisis eros. Nullam ullamcorper gravida risus in consectetur.   Nulla volutpat ligula at ullamcorper dignissim. Vivamus convallis pellentesquei id euismod. Vestibulum tempus nisl sed nunc placerat ultricies. Duis viverra  accumsan neque a fermentum. Vestibulum eu luctus urna, sit amet malesuada nunc.
            </p>
            <p className="text-lg  text-white p-6">
              Sed tincidunt, quam sit amet pharetra vulputate, nulla ligula placerat dui non pellentesque lorem dui id mauris. Nulla scelerisque magna a ipsum pretiu cursus. Duis ultrices nunc quis tortor auctor mollis. Etiam eget orci faucibus, faucibus lacus quis, tempus arcu. Sed tincidunt, quam sit amet pharetra vulputate, nulla ligula placerat dui, non pellentesque lorem dui id mauris. Nulla scelerisque magna a ipsum pretium cursus. Duis ultrices nunc quis tortor auctor mollis.
            </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutUsSection;
