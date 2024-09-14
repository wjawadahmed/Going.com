import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ImageSlider = () => {
    const carouselRef = useRef(null);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 460, min: 0 },
            items: 4,
        },
        smaller: {
            breakpoint: { max: 440, min: 0 },
            items: 3,
        },
    };

    const images = [
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fhouston_8c357a665d.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Houston'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fdenver_0bc5e06cbc.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Denver'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fatlanta_b54e77720b.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Atlanta'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fchicago_4408d15683.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Chicago'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fphoenix_6a4a048ccb.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Phoenix'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fmiami_be1e08ffe7.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Miami'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Forlando_f29a1cb562.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Orlando'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Ftampa_fef8b232d6.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Tampa'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fcharlotte_04d75cb481.jpg&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Charlotte'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fseattle_73e6abec37.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Seattle'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fdallas_8e0f937930.jpg&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Dallas'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Fboston_dae9be0df2.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Boston'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Flas_vegas_2eb20e8add.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Las Vegas'
        },
        {
            src: 'https://www.going.com/_next/image?url=https%3A%2F%2Fgoing-cms-strapi.s3.amazonaws.com%2Faustin_970b5b4aa5.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj',
            text: 'Cheap light from Austin'
        }
    ];
    const CustomLeftArrow = () => {
        return (
          <button
            onClick={() => carouselRef.current.previous()}
            className="py-[12px] px-[15px] bg-[#fffef0] text-[#003333] border-[2px] border-[#003333]  rounded-[50%] shadow-md hover:bg-[#368181] hover:text-[#fffef0] hover:border-transparent duration-150 ease-in transition-all "
            aria-label="previous"
          >
            <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19.8261 12L3.13046 12" stroke="currentColor" strokeWidth="2"></path>
    <path d="M3.13045 12C7.74082 12 11.4783 15.9073 11.4783 20.7273" stroke="currentColor" strokeWidth="2"></path>
    <path d="M3.13044 12C7.74082 12 11.4783 8.09268 11.4783 3.27274" stroke="currentColor" strokeWidth="2"></path>
  </svg>
          </button>
        );
      };
    
      // Custom Right Arrow
      const CustomRightArrow = () => {
        return (
          <button
            onClick={() => carouselRef.current.next()}
            className="py-[12px] px-[15px] bg-[#fffef0] text-[#003333] border-[2px] border-[#003333]  rounded-[50%] shadow-md hover:bg-[#368181] hover:text-[#fffef0] hover:border-transparent duration-150 ease-in transition-all "
            aria-label="next"
          >
          <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
    <path d="M20 12C15.5817 12 12 8.41828 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
    <path d="M20 12C15.5817 12 12 15.5817 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
  </svg>
          </button>
        );
      };
    
      return (
        <div className="p-6 bg-[#fffef0] shadow-lg">
          <div className="sm:pt-12 md:p-auto gap-4 flex justify-center items-center">
            <CustomLeftArrow />
            <h1 className="text-[#004449] md:text-5xl text-xl sm:text-3xl font-bold sm:p-11 p-5 text-center sm:font-semibold">
              Find cheap <span className="underline decoration-1">flights from</span> your favorite cities
            </h1>
            <CustomRightArrow />
          </div>
          <div className="relative">
            <Carousel
              responsive={responsive}
              ref={carouselRef} // Attach the reference to the carousel
              arrows={false}
            >
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center text-center transition-all">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="md:h-[16rem] sm:h-[10rem] h-[10rem] md:w-[140px] sm:w-[100px] w-[100px] lg:w-[180px] object-cover border-8 border-white rounded-full shadow-md"
                  />
                  <p className="mt-2 text-balance break-words font-semibold text-xs sm:text-base md:text-lg text-[#004449] underline decoration-[0.5px] lg:w-36 md:w-auto">
                    {image.text}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      );
    };
    
    export default ImageSlider;