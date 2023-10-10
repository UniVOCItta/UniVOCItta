import React from 'react';
import '../../App.css';
// Reusable elements
import Body from '../Body';
import HeroSection from '../HeroSection';
import ScrollToTop from '../ScrollToTop';


function Home() {
  return (
    <>
      <ScrollToTop/>
      <HeroSection/>
      <Body/>
    </>
  );
}

export default Home;