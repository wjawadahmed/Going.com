import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#004449] text-[#fffef0] py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Grid layout with responsive column adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-1">
              {[
                { text: 'How it works', href: '/how-it-works' },
                { text: 'About Us', href: '/about' },
                { text: 'Diversity, Equity, & Inclusion', href: '/diversity-equity-inclusion' },
                { text: 'Special Discounts', href: '/special-discounts' },
                { text: 'Careers', href: '/careers' },
                { text: 'Premium Membership', href: '/premium' },
                { text: 'Elite Membership', href: '/elite' },
                { text: 'Newsroom', href: '/newsroom' },
                { text: 'Member Stories', href: '/member-stories' },
                { text: 'Gift Cards', href: '/giftcards' },
                { text: 'Reviews', href: '/reviews' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-1">
              {[
                { text: 'Referral Program', href: '/referral-guide' },
                { text: 'Cheap Flights', href: '/flights' },
                { text: 'On the Fly Travel Guides', href: '/on-the-fly' },
                { text: 'Travel Glossary', href: '/glossary' },
                { text: 'Window Seat Blog', href: '/window-seat' },
                { text: 'How to Find Cheap Flights', href: '/guides/how-to-find-cheap-flights' },
                { text: 'How to Use Google Flights', href: '/guides/how-to-use-google-flights' },
                { text: 'Study Abroad Scholarship', href: '/scholarship' },
                { text: 'Travel Community', href: 'https://www.facebook.com/groups/goingtravelcommunity' },
                { text: 'Advertise With Us', href: '/advertise' },
                { text: 'Become an Affiliate', href: '/affiliate' },
                { text: 'Going for Teams', href: '/teams' },
                { text: 'Media Kit', href: '/assets' },
                { text: 'Play Airportle', href: '/airportle' },
                { text: 'Points and Miles Deals', href: '/points' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="https://help.going.com" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex flex-wrap space-x-4">
              {[
                { href: 'https://www.facebook.com/official.going', src: 'https://www.going.com/images/social/facebook-logo.svg' },
                { href: 'https://www.instagram.com/hello_going/', src: 'https://www.going.com/images/social/instagram-logo.svg' },
                { href: 'https://twitter.com/goingtweets', src: 'https://www.going.com/images/social/x-logo.svg' },
                { href: 'https://www.tiktok.com/@Going', src: 'https://www.going.com/images/social/tiktok-logo.svg' },
                { href: 'https://www.linkedin.com/company/going/', src: 'https://www.going.com/images/social/linkedin-logo.svg' },
                { href: 'https://www.youtube.com/@hello_going', src: 'https://www.going.com/images/social/youtube-logo.svg' },
                { href: 'https://www.pinterest.com/going/', src: 'https://www.going.com/images/social/pintrest-logo.svg' },
              ].map((icon) => (
                <a key={icon.href} href={icon.href}>
                  <img src={icon.src} alt="social-icon" className="w-8 h-8 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Section */}
       
      </div>
      <div className="mt-8 h-[5rem] w-full -mb-8 uppercase font-semibold bg-[#fffef0] text-[#004449] border-t pt-4 flex flex-col md:flex-row justify-end items-center">
          <div className="ml-6 text-sm space-y-2 md:space-y-0 md:flex md:space-x-4">
            <a href="/terms-of-use" className="hover:underline">
              Terms
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy
            </a>
            <a href="/" className="hover:underline">
              © Going 2024
            </a>
          </div>
          <svg
            aria-label="Going logo"
            fill="none"
            height="55"
            width="55"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 55 55"
            className="mt-4 md:mt-0"
          >
            {/* SVG Path goes here */}
          </svg>
        </div>
    </footer>
  );
};

export default Footer;
