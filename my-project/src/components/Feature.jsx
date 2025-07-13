import React from 'react';
import Background from './Background/Background';
import { NavLink } from 'react-router-dom';

const Feature = () => {
  return (
    <>
      <Background playStatus={false} heroCount={3} />

      {/* Title */}
      <div className="bg-black rounded-[9px] px-[10px] py-[5px] text-[42px] font-normal text-neutral-50  font-['manufacturing_Consent'] text-center">
        WORLDcar
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 p-6">
        {/* FEATURE-1 */}
        <div className="w-full lg:w-1/3 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">FEATURE-1</h2>
          <p>This is the left side content.</p>
        </div>

        {/* FEATURE-2 */}
        <div className="w-full lg:w-1/3 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">FEATURE-2</h2>
          <p>This is content.</p>
        </div>

        {/* FEATURE-3 */}
        <div className="w-full lg:w-1/3 bg-red-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">FEATURE-3</h2>
          <p>This is the right side content.</p>
        </div>
      </div>

      {/* Go Back Button */}
      <div className="flex justify-center my-4">
        <NavLink to="/">
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition"
          >
            Go Back
          </button>
        </NavLink>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-center py-2">
        <p className="text-neutral-50">BY SUMIT-2025</p>
      </div>
    </>
  );
};

export default Feature;
