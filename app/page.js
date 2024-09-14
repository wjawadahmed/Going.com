"use client";
import React from 'react';
import Nav from '@/Components/Nav';
import Hero from '@/Components/Hero';
import Map from '@/Components/Map';
import Deals from '@/Components/Deals';
import SmallCallOut from '@/Components/SmallCallOut';
import CalloutSection from '@/Components/CallOutSection';
import HeroOuter from '@/Components/HeroOuter';
import ImageSlider from '@/Components/FlexContainer';
import CheapFlightsInfo from '@/Components/FlightsInfo';
import GuidesSection from '@/Components/SectionOuter';
import PopularDestinations from '@/Components/PopularDestinations';
import FAQSection from '@/Components/FaqSection';
import MobileAppHero from '@/Components/MobileAppHero';
import Footer from '@/Components/Footer';
const Page = () => {
  return (
    <>
      <div className="h-20 relative">
        <Nav />
        <main>
          <Hero />
          <Map />    {/* Map component should show above the deals */}
          <Deals />  {/* Deals component comes below the map */}
          <SmallCallOut/>
          < CalloutSection/>
          <HeroOuter/>
          <ImageSlider/>
          <CheapFlightsInfo/>
          <GuidesSection/>
          <PopularDestinations/>
          <FAQSection/>
          <MobileAppHero/>
          <Footer/>
        </main>
      </div>
    </>
  );
};

export default Page;
