// Home.js
import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/footer';
import HomePageComponent from '../components/LeftSection';
import Hero from '../components/hero';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomePageComponent />
      <Hero />
     <Footer />
    </div>
  );
};

export default Home;
