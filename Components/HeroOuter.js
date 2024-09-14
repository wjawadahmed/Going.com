import React from 'react';

const HeroOuter = () => {
  return (
    <div className="bg-[#004449] h-[33vh] leading-tight sm:h-[60vh] md:h-[90vh] flex items-center justify-center p-5">
      <div className="text-center">
        <div className="px-8 sm:p-auto mb-6">
          <h2 className="text-3xl  sm:text-4xl md:text-5xl font-[530] leading-snug text-[#fffef0] w-full sm:w-3/4 md:w-2/3 mx-auto">
            Our experts find you the best cheap flights. Period.
          </h2>
        </div>
        <div>
          <p className="font-extralight text-md sm:text-lg px-5 sm:p-auto text-[#fffef0] w-full sm:w-3/4 md:w-1/2 mx-auto">
            A Going deal means low prices and one-stop or nonstop itineraries on airlines you know and love.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroOuter;
