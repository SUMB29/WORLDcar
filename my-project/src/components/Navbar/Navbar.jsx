import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-8 md:px-16 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">


          <div className="bg-black flex rounded-lg px-3 py-2 text-3xl sm:text-4xl font-normal font-['manufacturing_Consent']">
            <img src={logo} alt="" className='h-10 w-15' />WORLDcar
          </div>

          <p className="text-white font-['Dancing_Script'] text-2xl sm:text-xl font-extralight opacity-90 mt-1">
            all popular brands together
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-base sm:text-lg font-light z-10">
          <NavLink
            className="px-4 py-2 rounded-2xl hover:bg-red-500 transition"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-2xl hover:bg-red-500 transition"
            to="/models"
          >
            Models
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-2xl hover:bg-red-500 transition"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-2xl hover:bg-red-500 transition"
            to="/signin"
          >
            Sign in
          </NavLink>
          <NavLink
            className="px-4 py-2 border border-white rounded-full hover:bg-gray-500 hover:text-black transition"
            to="/todo"
          >
            Feature
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
