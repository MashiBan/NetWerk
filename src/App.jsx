import React from 'react';
import myImage1 from './assets/undraw_feeling_proud_qne1.svg';

const App = () => {
  return (
    <div className="  bg-gradient-to-br from-gray-900 via-gray-900  to-purple-900 min-h-screen flex overflow-hidden">
       <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between z-50 bg-black p-10 m-10 backdrop-blur-3xl opacity-40 rounded-3xl filter">
            <h2 className="text-6xl font-bold  text-green-400 p-6 bg-black rounded">AboutUs</h2>
            <div className='p-6 m-8  text-white justify-evenly flex-box rounded-xl'>
            <img src={myImage1} alt="My Image" className="w-48 h-auto z-9999 rounded-lg  flex-shrink" />
            <p className="text-sm p-6 text-white mb-2">
              Suspendisse eu leo suscipit, semper nisi at, iaculis elit.  Phasellus id facilisis eros. Nullam ullamcorper gravida risus in consectetur.   Nulla volutpat ligula at ullamcorper dignissim. Vivamus convallis pellentesquei id euismod. Vestibulum tempus nisl sed nunc placerat ultricies. Duis viverra  accumsan neque a fermentum. Vestibulum eu luctus urna, sit amet malesuada nunc.
            </p>
            <p className="text-sm  text-white p-6">
              Sed tincidunt, quam sit amet pharetra vulputate, nulla ligula placerat dui non pellentesque lorem dui id mauris. Nulla scelerisque magna a ipsum pretiu cursus. Duis ultrices nunc quis tortor auctor mollis. Etiam eget orci faucibus, faucibus lacus quis, tempus arcu. Sed tincidunt, quam sit amet pharetra vulputate, nulla ligula placerat dui, non pellentesque lorem dui id mauris. Nulla scelerisque magna a ipsum pretium cursus. Duis ultrices nunc quis tortor auctor mollis.
            </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;
