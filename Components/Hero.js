"use client"
import React from 'react'

const Hero = () => {
  return (
    <div className="flex hero text-[#004449] flex-col gap-4 md:gap-6 items-center mt-20 ">
            <div className="sectionTitle flex items-center justify-center">
              <h1 className="heading text-center leading-tight  text-[2.25rem] sm:text-[3rem]  md:text-[4.5rem] md:font-bold ">
                <span className="md:block">Search cheap flights</span>
                <span className="md:block"> and flight deals</span>
              </h1>
            </div>
            <div className="text-center text-xl max-w-[725px] p-4 sm:p-6">
              <p className=" text-base ">
                <span className="font-bold"> Real</span> <span className="text-[#483CFF] font-bold ">deals</span><span className="font-bold"> . Real prices.</span>
                Most members save an average of $550 on economy flights with great itineraries from the best airlines. Where will you go?
              </p>
            </div>
            <div className="search shadow-md py-5 px-7 hover:bg-slate-200 bg-white rounded-full flex flex-col w-4/5 sm:w-[90%] md:w-[70%]">
              <span className="searchText text-[0.75rem] tracking-widest text-black">AIRPORT</span>
              <input className="searchInput bg-transparent focus:outline-none " placeholder='PWM - Portland International Jetport' />
            </div>
            <span className="text-sm">Search Going.com</span>
            </div>
  )
}

export default Hero