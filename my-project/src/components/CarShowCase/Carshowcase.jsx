import React from "react";
import { NavLink } from "react-router-dom";
import carImage1 from "../../assets/car1.jpg";
import carImage2 from "../../assets/car2.jpg";

const CarShowcase = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-white">
        Explore Our Top Car Models
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Car 1 */}
        <div className="bg-white text-black rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 duration-300">
          <img
            src={carImage2}
            alt="Audi RS7"
            className="w-full h-48 sm:w-full sm:h-56 md:h-64 lg:h-72 object-cover"
          />
          <div className="p-5">
            <NavLink to="/signin">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Audi RS7</h3>
              <p className="text-sm sm:text-base">
                A luxury sportback that blends aggressive design with cutting-edge performance and comfort.
              </p>
            </NavLink>
          </div>
        </div>

        {/* Car 2 */}
        <div className="bg-white text-black rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 duration-300">
          <img
            src={carImage1}
            alt="Mercedes AMG GT"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
          />
          <div className="p-5">
            <NavLink to="/signin">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Mercedes AMG GT</h3>
              <p className="text-sm sm:text-base">
                A premium performance coupe built for speed, power, and stunning design aesthetics.
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
