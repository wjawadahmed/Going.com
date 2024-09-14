import React from 'react';

const CheapFlightsInfo = () => {
  return (
    <div className="infoBlocksOuter pt-6 pb-12 md:p-16 lg:p-20 text-center bg-white text-[#004449]">
      <div className="infoBlocksInner mx-auto max-w-4xl">
        <div className="titleContainer mb-8">
          <h2 className="heading text-4xl sm:text-5xl sm:p-auto p-10 font-semibold sm:mb-4 text-center -mb-6">Become an expert on cheap flights</h2>
        </div>
        <div className="paragraphContainer text-left">
          <p className="paragraph text-sm sm:text-md mb-6 p-4 rounded-md">
            Close out all those tabs. Turn off your incognito window. At Going, the most exciting flight opportunities
            find you. But that doesn't mean there aren't a few tips and tricks to get the best deal possible.
          </p>

          <div className="listContainer space-y-6">
            <div className="listItemWrapper p-4   rounded-md">
              <div className="listItemTitle mb-2 flex items-center space-x-2">
                <span className="listItemNumber py-1 px-2 rounded-full text-xs font-bold bg-[#d7ffc2]">1</span>
                <span className="label text-lg font-semibold leading-snug  uppercase tracking-wider">Start with Google.</span>
              </div>
              <p className="paragraph text-sm sm:text-md">
                While there are dozens of search sites for cheap tickets, Google Flights offers the most tools and
                features to help you quickly search for flights and find the cheapest tickets so you can book directly
                with the airline. Or, if you prefer to book with a site where you can earn booking rewards, start with
                Google Flights to see all your options and then move over to the other site once you've chosen your
                flight and are ready to book. No matter where you do your searching, the same best practices for
                finding cheap tickets apply.
              </p>
            </div>

            <div className="listItemWrapper p-4   rounded-md">
              <div className="listItemTitle mb-2 flex items-center space-x-2">
                <span className="listItemNumber py-1 px-2 rounded-full text-xs font-bold bg-[#d7ffc2]">2</span>
                <span className="label text-lg font-semibold leading-snug  uppercase tracking-wider">Be as flexible as possible.</span>
              </div>
              <p className="paragraph text-sm sm:text-md">
                The more narrow your search, the fewer your options and the lower your chances of snagging a cheap
                flight. If you can be flexible on the days you fly, the airlines, and the length of your trip, you can
                increase your chances of snagging a great deal.
              </p>
            </div>

            <div className="listItemWrapper p-4   rounded-md">
              <div className="listItemTitle mb-2 flex items-center space-x-2">
                <span className="listItemNumber py-1 px-2 rounded-full text-xs font-bold bg-[#d7ffc2]">3</span>
                <span className="label text-lg font-semibold leading-snug  uppercase tracking-wider">Focus on getting across the ocean as cheaply as possible.</span>
              </div>
              <p className="paragraph text-sm sm:text-md">
                You're probably wondering why you'd be flexible on where you're going. If you want to go to Amsterdam,
                you want to go to Amsterdam. But what if it was $300 cheaper to fly to Paris, which is just a few hours
                from Amsterdam by train? When you're flying long-haul internationally, take a look at options near
                your final destination. It may be cheaper to fly there and then connect to where you want to end up.
              </p>
            </div>

            <div className="listItemWrapper p-4   rounded-md">
              <div className="listItemTitle mb-2 flex items-center space-x-2">
                <span className="listItemNumber py-1 px-2 rounded-full text-xs font-bold bg-[#d7ffc2]">4</span>
                <span className="label text-lg font-semibold leading-snug  uppercase tracking-wider">Book during the right window.</span>
              </div>
              <p className="paragraph text-sm sm:text-md">
                Meaning, not too far in advance and not too late. The best deals are usually found 1–3 months in
                advance for domestic flights and 2–8 months in advance for international tickets.
              </p>
            </div>

            <div className="listItemWrapper p-4   rounded-md">
              <div className="listItemTitle mb-2 flex items-center space-x-2">
                <span className="listItemNumber py-1 px-2 rounded-full text-xs font-bold bg-[#d7ffc2]">5</span>
                <span className="label text-lg font-semibold leading-snug  uppercase tracking-wider">Act fast.</span>
              </div>
              <p className="paragraph text-sm sm:text-md">
                When airlines drop prices, they don't usually do it for long. If you want to snag a cheap ticket, you
                have to move quickly. Sometimes the price rises within hours or even minutes. Not sure if you can get
                the time off work? The 24-hour rule can help. This US DOT regulation says airlines have to offer you
                the chance to hold your fare or to get a cash refund within 24 hours of booking (and most airlines
                choose the latter). This means you can book and then figure out your plans. If it doesn't work, you can
                cancel within 24 hours and get a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheapFlightsInfo;
