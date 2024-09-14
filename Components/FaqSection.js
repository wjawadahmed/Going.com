import React from 'react';

const FAQSection = () => {
  return (
    <div className="sectionOuter mx-auto py-8 px-4 bg-[#fffef0] text-[#004449]">
      <div className="section">
        <div className="title text-center mb-8 pl-8 pr-8 sm:p-auto">
          <h2 className="heading  text-4xl sm:text-5xl font-[550] mt-16">
            Frequently asked questions about cheap flights
          </h2>
          <p className="paragraph mt-2 ">
            Answered by our resident cheap flights expert Scott
          </p>
        </div>
        <div className="content flex md:flex-row flex-col  sm:flex-col  md:items-start items-center transition-all ease-in-out">
          <img
            alt="A person wearing a broad-brimmed hat reaches out with one hand to touch a rough, weathered-looking stone dragon."
            loading="lazy"
            width="100"
            height="100"
            className="w-[18rem] h-[19rem] object-cover rounded-xl mr-6 mb-6"
            src="https://www.going.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflights-faq-photo.0ee40724.png&w=640&q=75&dpl=dpl_HnfQgEM6u8RbvmxJhzcrhepHwrbj"
          />
          <div className="faq flex-1">
            <div className="accordionOuter  w-screen md:w-full">
              {faqData.map((faq, index) => (
                <details key={index} className="accordion  m-4 border-b-[0.4px] border-[rgba(0,68,73,.4)]  ">
                  <summary className="flex justify-between items-center  cursor-pointer sm:p-2 p-1">
                    <h3 className="paragraph text-sm sm:text-md font-semibold pb-2  ">{faq.question}</h3>
                    <span className="iconWrapper">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        aria-hidden="true"
                      >
                        <path
                          stroke="#004449"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m18.494 8.713-6.572 6.573-6.416-6.573"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="accordionAnswer sm:p-4 p-2">
                    <p className="paragraph text-sm sm:text-md md:ml-4 ml-2">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How do I get cheap last-minute flights?",
    answer: "Got an impromptu family vacation? Business? Emergency? Last-minute flight deals can sometimes be harder to come by, but not impossible. Many people assume that if an airline isn't fully booked for a flight, they might drop the prices a few days before take-off. That's often not true. Airlines tend to have enough demand from last-minute business travelers, who will pay even a higher last-minute price. This means airlines tend to offer cheaper tickets up front and gradually increase their prices closer to the flight. Of course, that doesn't mean there won't be price drops, so getting good at planning around a good deal is the best tool in not breaking the bank for travel. Just like there are best practices for getting a good deal, there's some strategy in approaching tickets at the last minute. Start by checking surrounding airports. You might be able to fly out of New York’s LaGuardia, for example, at a lower price than JFK. You can also look at one-way tickets. This gives you the flexibility to book different airlines that offer the cheapest flight each way. If you're traveling in a group, it might be worth booking separately. Some people might want to avoid budget airlines, whereas others might like the idea of saving as much as possible. You can also book the cheapest seat versus trying to reserve five or more tickets.",
  },
  {
    question: "When are flights cheapest?",
    answer: "There is typically a golden window for booking flights—not too far in advance and not too late. The best deals are usually found 1–3 months in advance for domestic flights and 2–8 months in advance for international tickets. With Going, we send flight deals as airlines drop prices, allowing you to plan ahead.",
  },
  {
    question: "Why do flights get canceled?",
    answer: "There is nothing worse than a canceled flight—except maybe taxes. It's especially upsetting when we've spent a lot of time and money planning a vacation and then, poof! The flight is not happening. Just remember that there is always a good reason, even if it's not immediately obvious. Weather is a big one. An airplane cannot safely navigate in some weather conditions, like snowstorms, hurricanes, fog, strong winds, or even extreme heat! Airlines will do their best to put you on another flight, but they aren't penalized for grounding a plane for weather conditions. This means that if you lose money for missed connections, delayed check-ins, or extended stays, you aren't owed compensation. This is where travel insurance, or a credit card with travel protections, can really help. Airlines might also cancel flights for security reasons, particularly if an airport you're flying from or to has any threats or scares. You should never leave your baggage unattended or joke about harm, and you should always report strange or suspicious behavior. The TSA says it's more common than people think to have foolish people make bad jokes or pull pranks. Planes have mechanical problems, just like your car might get a ‘check engine’ light or flat tire. It is in everyone's best interest to ensure planes are tip-top shape to fly. Typically, mechanical problems only lead to inconvenient delays, but sometimes flights are canceled if the plane can't be repaired quickly and there isn’t another one available. Always check individual airline policies when faced with this sort of delay or cancellation. Since this is within the airline's control, they can rebook you, potentially upgrade, or compensate you. And always be kind to airline and airport staff. When you smile through the pain, people are more likely to do the same. Missing crew or missing aircraft. Just as your flight can be delayed or canceled, if another flight (completely unrelated to yours) gets grounded, an aircraft and its crew might be stuck elsewhere, and you can’t proceed as scheduled. When this happens, don't panic. Chances are that the airline is already working to remedy the situation. They will be scrambling to find new planes or flight crew, so there may be a delay or two before they resort to canceling the flight. If you booked an early-bird ticket, you have many more options of getting put on a different flight versus being stuck overnight. However, airlines might still owe you compensation, if you know what to ask for.",
  },
  {
    question: "Why are flights so expensive?",
    answer: "There are several factors involved but really, it's pretty simple: rising jet fuel prices, staff shortages, high demand, and capitalism. Airlines don't have to set prices at industry standard, especially if they dominate an airport. At airline hubs, where airports cater to one major airline, the competition that would create lower prices isn’t as strong—when nine out of ten flights are from one airline, they can set their own prices and passengers have to deal with it. But this doesn't mean you have to overpay for flights. Even if “average” fares are expensive, you don’t need to worry about averages. You just need to worry about booking when the price is low.",
  },
  {
    question: "When is the best time to get cheap flights?",
    answer: "There’s no single best day to book your flights. It’s not Tuesday at 3PM, or exactly 44 days before your trip. However, there is a timeframe when a good deal is most likely to pop up—1–3 months in advance for domestic trips, and 2–8 months in advance for international trips. When it comes to the cheapest time to travel, prices for flights (and vacations in general) are influenced by traffic. Many people travel during the summer and holiday seasons because of more flexible PTO, school breaks, good weather, and special occasions. This is known as a destination’s “peak season.” By contrast, fewer people travel during a destination’s “off-season.” For example, the monsoon season is Thailand’s “off-season.” “Shoulder season” is the sweet spot for good weather conditions and decent prices right before or immediately after peak season. If you want to go to Europe, for instance, consider planning your trip during spring or fall. And if you absolutely have to travel during peak season, book tickets well in advance.",
  },
];

export default FAQSection;
