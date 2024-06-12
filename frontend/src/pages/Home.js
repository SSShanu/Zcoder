// Home.js
import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Box from '../components/Box';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Box />
      <About />
      
      <Footer />
    </div>
  );
};

export default Home;
