// Home.js
import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/footer';
import HomePageComponent from '../components/LeftSection';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomePageComponent />
     <Footer />
    </div>
  );
};

export default Home;
