import React from 'react';

const imageData = [
  {
    link: "https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fbali_12a3b0d2a5.png&w=1200&q=75",
    text: "Bali",
  },
  {
    link: "https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fflorida_5cc352e41d.png&w=1200&q=75",
    text: "Florida",
  },
  {
    link: "https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fmiami_bd9ffb86e0.png&w=1200&q=75",
    text: "Miami",
  },
  {
    link: "https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fvegas_17400d6d0b.png&w=1200&q=75",
    text: "Vegas",
  },
  {
    link: "https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fhawaii_657e626166.png&w=1200&q=75",
    text: "Hawaii",
  },
  {
    link: "https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Feurope_e478704353.png&w=1200&q=75",
    text: "Europe",
  },
];

const PopularDestinations = () => {
  return (
    <div className="m-auto py-8 px-4 bg-[#d7ffc2] w-full">
      <div className=" flex text-center justify-center align-middle m-10">
        <h2 className="text-4xl sm:text-5xl font-semibold text-[#004449] ">
          Cheap <a href="/flights/to" className=" underline decoration-[0.5px]">flights to</a> popular destinations
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {imageData.map((image, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full">
            <img 
              src={image.link} 
              alt={image.text} 
              className="cursor-pointer  md:h-[12rem] md:w-[20rem] lg:w-[23rem] lg:h-[15rem] object-cover rounded-full mb-2 transition-transform duration-300 transform hover:scale-105" 
            />
            <p className="text-lg font-semibold ">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
