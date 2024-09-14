import React from 'react';

// Array of JSON objects with deal details
const dealsData = [
  {
    destination: "Fort Myers, FL",
    price: 164,
    originalPrice: 310,
    from: "PWM",
    imageUrl: "https://static.going.com/city_images/images/000/000/318/large/USA-FortMyers-01.jpg?1617294526",
    class: "Economy"
  },
  {
    destination: "Los Angeles, CA",
    price: 500,
    originalPrice: 650,
    from: "PWM",
    imageUrl: "https://images.unsplash.com/photo-1711426793036-cc10917d34a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvcyUyMGFuZ2VsZXN8ZW58MHx8MHx8fDA%3D",
    class: "Economy"
  },
  {
    destination: "New York, NY",
    price: 720,
    originalPrice: 900,
    from: "PWM",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfDB8MHx8fDA%3D",
    class: "Economy"
  },
  {
    destination: "Miami, FL",
    price: 480,
    originalPrice: 660,
    from: "PWM",
    imageUrl: "https://images.unsplash.com/photo-1501509497947-782640bc1412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlhbWl8ZW58MHwwfDB8fHww",
    class: "Economy"
  },
];

const Deals = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="sm:container  p-4">
        <div className="order-last text-center mb-8">
          <h3 className="text-3xl font-thin text-[#004449]">
            Flight deals from <span className="text-blue-600">PWM</span> right now
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 sm:w-28 md:w-auto  lg:gap-x-16 md:gap-x-48 md:m-14 h-auto">
          {dealsData.map((deal, index) => (
            <div key={index} className="md:w-[16rem] sm:w-[38rem] transition-all ease-in-out relative bg-white shadow-md rounded-lg overflow-hidden  h-[18rem] md:h-[30rem] flex md:flex-col-reverse ">
              <div className="absolute inset-0 sm:flex sm:justify-end  md:flex-none  sm:h-full md:h-auto  w-full">
                <img
                  alt={deal.destination}
                  src={deal.imageUrl}
                  className="sm:w-[360px]  md:w-auto h-full object-cover rounded-1xl w-full"
                />
              </div>
              <div className=" relative sm:w-[10rem] md:w-auto sm:p-4 p-6 bg-white md:rounded-2xl sm:h-auto md:h-1/2 mb-[-2rem]"> 
                <div className="flex justify-start items-center mb-2 gap-3">
                  <div className="text-sm text-gray-800 px-4 py-[0.4rem] bg-orange-200 rounded-3xl inline-flex font-extrabold">
                    <span className="leading-0 text-[0.4375rem] font-[900] mt-[-2px] ">$</span> {deal.price}
                  </div>
                  <div className="text-xs text-gray-800 inline-flex font-thin line-through">
                    <span className="font-bold ">$</span> {deal.originalPrice}
                  </div>
                </div>
                <div className="mb-2 text-[#004449]">
                  <div className="text-xl font-bold break-words md:text-2xl">{deal.destination}</div>
                  <div className="text-gray-600 text-xs md:mt-5 mt-4 mb-5">From {deal.from}</div>
                </div>
                <div className="text-sm font-bold text-[#004449] ">
                  <div>{deal.class}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
