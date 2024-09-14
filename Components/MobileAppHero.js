import React from 'react';

const MobileAppHero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-2 pt-20 bg-[#d7ffc2] overflow-hidden">
      <div className="relative flex flex-col items-center lg:flex-row lg:justify-between w-full max-w-screen-lg mx-auto">
        <div className="hidden xl:block lg:w-32 lg:h-32 absolute -right-28 top-1 transform -translate-y-1/2">
          <img
            src="https://www.going.com/_next/static/media/hand-pointing.1e68e726.svg"
            alt="Hand pointing"
            className="xl:w-[9rem] h-auto"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start w-full">
          <div className="flex p-6 items-center justify-center mb-4 lg:mb-6 relative h-full">
            <img
              src="https://www.going.com/_next/static/media/circle.a91e8fac.svg"
              alt="circle around Explore"
              className="absolute lg:-top-5 lg:w-[12.3rem] lg:left-4 md:w-[28.3rem] lg:h-[8rem]"
            />
            <span className="ml-2 text-3xl lg:text-5xl font-[700] italic text-[#004449] text-center"> Explore the Going app</span>
          </div>
          <div className="md:p-10 p-6 lg:p-0 lg:pb-6 sm:px-14 text-center">
            <span className=" text-2xl sm:text-3xl  text-[#004449] font-thin sm:font-[600] text-center  mb-4 lg:mb-6">
              Discover your next trip by downloading the Going app on iOS and Android.
            </span>
          </div>
      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 md:space-x-2 md:space-y-2 mx-auto px-4 lg:px-0 max-w-screen-lg">
  <a href="https://going.onelink.me/0jRM/launch">
    <img
      src="https://www.going.com/_next/static/media/apple-app-store-badge.24a5cbb7.svg"
      alt="Apple App Store"
      className="w-[11rem]  h-auto"
    />
  </a>
  <a href="https://going.onelink.me/0jRM/launch">
    <img
      src="https://www.going.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-play-store-badge.27e576c6.png&w=384&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj"
      alt="Google Play Store"
      className="w-[11rem] h-auto"
    />
  </a>
</div>


        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-end w-full lg:w-1/2 lg:mx-6">
          {/* Mobile App Screen Image */}
          <div className="w-full max-w-md  md:max-w-md mb-4 lg:mb-0">
            <img
              src="https://www.going.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-app-screen.b6a87c52.png&w=1920&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj"
              alt="Mobile app screen"
              className="w-full h-auto sm:max-w-xs md:max-w-lg -mb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppHero;
