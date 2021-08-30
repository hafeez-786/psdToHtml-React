import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/Topbar';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Offer from './components/Offer';
import MostPopular from './components/MostPopular';
import FeatureBox from './components/FeatureBox';
import TrendingProducts from './components/TrendingProducts';
import SilonJournal from './components/SilonJournal';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
      <header>
        <TopBar />
        <Navbar />
        <Banner />
      </header>
      <FeaturedProducts />
      <Offer />
      <MostPopular />
      <FeatureBox />
      <TrendingProducts/>
      <SilonJournal />
      <FollowUs />
      <Footer />
    </>
  )
}

export default Home
