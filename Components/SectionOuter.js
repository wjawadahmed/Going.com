import React from 'react';

const guides = [
  {
    src: "https://going-cms-strapi.s3.amazonaws.com/how_to_17c3979604.svg",
    alt: "hands holding up binoculars with eyes shown through lenses",
    title: "How to Find Cheap Flights",
    url: "/guides/how-to-find-cheap-flights"
  },
  {
    src: "https://going-cms-strapi.s3.amazonaws.com/google_a757e80d68.svg",
    alt: "Google Flights logo",
    title: "Google Flights Guide",
    url: "/guides/how-to-use-google-flights"
  },
  {
    src: "https://going-cms-strapi.s3.amazonaws.com/best_time_to_book_1c5b493209.webp",
    alt: "a toy airplane sitting on a calendar",
    title: "The Best Time to Book Flights",
    url: "/guides/the-best-time-to-book-a-cheap-flight"
  }
];

const GuidesSection = () => {
  return (
    <div className="sectionOuter py-12 px-6 lg:px-12 bg-[#fffef0] text-[#004449]">
      <div className="section max-w-5xl mx-auto">
        <h2 className="heading text-lg sm:text-xl font-semibold mb-8 text-left">
          Check out our in-depth guides to finding cheap flights
        </h2>
        <div className="cardGrid grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {guides.map((guide, index) => (
            <a key={index} href={guide.url} className="no-underline">
              <div className="card  bg-white rounded-xl overflow-hidden border border-[#004449] h-[21rem]">
                <div className="cardImage relative h-64">
                  <img
                    alt={guide.alt}
                    src={guide.src}
                    className="absolute inset-0 w-full h-full object-cover px-5 py-8 pb-2"
            
                  />
                </div>
                <div className="cardBottom p-4 flex items-center justify-between">
                  <h3 className="paragraph text-md sm:text-xl font-[550]">
                    {guide.title}
                  </h3>
                  <div className="-ml-6 button large tertiary icon-only flex items-center rounded-full hover:bg-[#368181] hover:text-[#fffef0] hover:border-transparent duration-100 ease-in transition-all p-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                      <path d="M20 12C15.5817 12 12 8.41828 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                      <path d="M20 12C15.5817 12 12 15.5817 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidesSection;
