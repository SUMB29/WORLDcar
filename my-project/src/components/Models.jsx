import React from 'react'
import Background from './Background/Background'
import { NavLink } from 'react-router-dom'
import CarShowcase from './CarShowCase/Carshowcase'



const Models = () => {
  return (
    <div>
      <Background playStatus={false} heroCount={7} />
      <div class="bg-transparent text-neutral-50 rounded-[9px] px-[10px] py-[5px] text-[42px] font-normal font-['manufacturing_Consent']">WORLDcar</div>
      <CarShowcase />

      <div className="flex justify-center my-4">
        <button type="button" className="btn btn-light">
          <NavLink className="no-underline z-10 text-black" to="/">Go Back</NavLink>
        </button>
      </div>
    </div>
  )
}

export default Models


