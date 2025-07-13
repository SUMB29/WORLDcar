import React from 'react'
import Background from './Background/Background'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <Background playStatus={false} heroCount={7} />

      {/* Responsive Title */}
      <div className="bg-black border border-neutral-50 text-neutral-50 rounded-[9px] px-4 py-2 text-[42px] sm:text-[32px] text-center font-normal font-['manufacturing_Consent']">
        WORLDcar
      </div>


      {/* Main Container */}
      <div className="relative flex flex-col items-center justify-start gap-4 mt-16 mx-4 border border-neutral-50 rounded-md p-4 bg-transparent h-auto sm:h-[50vh]">
        <p className="text-neutral-50 text-lg sm:text-xl font-semibold">SERVICES</p>

        {/* Services List */}
        <div className="w-full sm:w-[98%] h-[100%] border border-neutral-50 p-5">
          <ul className="list-disc list-inside h-[100%] md:h-[90%] sm:h-[50%] text-white space-y-2">
            <li className="text-neutral-50">SERVICE 1</li>
            <li className="text-neutral-50">SERVICE 2</li>
            <li className="text-neutral-50">SERVICE 3</li>
          </ul>
        </div>

        {/* Go Back Button */}
        <div className="w-full flex justify-start sm:justify-start">
          <button type="button" className="btn btn-light mt-2">
            <NavLink className="no-underline z-10 text-black" to="/">Go Back</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
