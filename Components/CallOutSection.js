import React from 'react';

const CalloutSection = () => {
  return (
    <div className="sm:bg-sky-200 bg-sky-200 md:bg-gray-100 h-auto flex justify-center items-center p-24 md:h-screen ">
      <div className="w-full max-w-4xl bg-sky-200 py-6  px-2 md:py-16 rounded-lg md:shadow-lg">
        <div className="text-center">
          <h2 className="md:text-5xl text-5xl font-extralight text-[#004449] mb-6">
            Cheap flights that don't feel "cheap"
          </h2>
          <div className="mb-8 px-2  md:px-12 lg:px-24">
            <h5 className=" text-xl sm:text-2xl lg:text-2xl font-light text-[#004449]">
              Most deals are 40-90% off normal prices with great itineraries from the best airlines.
              If it's not an amazing deal, we won't send it. Sign up for free to start getting flight alerts.
            </h5>
          </div>
          <div>
            <a
              aria-label="Get Going"
              href="/signup"
              target="_self"
              className="inline-flex items-center justify-center bg-sky-200 text-[#004449] text-lg sm:text-base font-bold py-3    border-[2px] border-[#004449] px-7 sm:px-8 rounded-full hover:text-[#fffef0] hover:bg-[#004449] transition duration-300 ease-in-out"
            >
              GET GOING
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutSection;
