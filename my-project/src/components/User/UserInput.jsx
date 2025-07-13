import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const UserInput = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-lg mx-auto p-6 bg-gray-300 rounded-lg shadow-lg font-sans"
      >
        {/* Google Sign-in Button */}
        <div className="flex flex-col items-center mb-6">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 transition"
          >
            <svg
              viewBox="0 0 48 48"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path fill="#FBBC05" d="M9.83 24a14.2 14.2 0 0 1 .7-4.36L2.62 13.6A23.62 23.62 0 0 0 .21 24c0 3.74.87 7.26 2.4 10.39l7.9-6.04a14.18 14.18 0 0 1-.68-4.35Z" />
              <path fill="#EB4335" d="M23.71 10.13c3.31 0 6.3 1.17 8.65 3.1l6.84-6.83C35.04 2.77 29.7.53 23.71.53 14.43.53 6.45 5.84 2.62 13.6l7.9 6.04c1.82-5.53 6.99-9.51 13.19-9.51Z" />
              <path fill="#34A853" d="M23.71 37.87c-6.17 0-11.4-4.01-13.18-9.51l-7.9 6.04c3.82 7.76 11.8 13.09 21.08 13.09 5.73 0 11.19-2.04 15.31-5.85l-7.5-5.8c-2.12 1.33-4.79 2.02-7.81 2.02Z" />
              <path fill="#4285F4" d="M46.14 24c0-1.39-.21-2.74-.54-4.03H23.71v9.07h12.6c-.63 3.09-2.35 5.46-4.79 6.99l7.5 5.8C43.34 37.61 46.14 31.65 46.14 24Z" />
            </svg>
            <span className="ml-2 text-gray-700 font-medium">Continue with Google</span>
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-gray-700 font-semibold mb-1">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-1">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              placeholder="Enter mobile number"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Username or Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter username or email"
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="mt-6 w-full bg-black hover:bg-gray-500 text-white py-2 rounded-md"
        >
          Submit
        </button>
      </form>

      {/* Go Back Button */}
      <div className="flex justify-center mt-2">
        <NavLink to="/home">
          <button className="bg-white hover:bg-gray-500 text-black py-2 px-6 rounded-md transition">
            Go Back
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default UserInput;
