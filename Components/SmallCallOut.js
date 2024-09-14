import React from 'react';

const SmallCallOut = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-100 h-[26rem]">
      <span className="text-3xl font-thin text-[#004449] mb-4">
        Tired of searching for flights?
        <br />
        <span className="bg-[#D7FFC2] px-2">
          Get cheap flight alerts delivered.
        </span>
      </span>
      <a
        aria-label="Get Going"
        href="/signup"
        target="_self"
        className="inline-flex items-center justify-center bg-[#483CFF] text-white text-md font-semibold py-5 px-10 rounded-full hover:bg-[#e4e3f2] hover:text-[#483CFF] transition duration-300 ease-in-out"
      >
        GET GOING
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="ml-2"
        >
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M20 12C15.5817 12 12 8.41828 12 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M20 12C15.5817 12 12 15.5817 12 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </a>
    </div>
  );
};

export default SmallCallOut;
