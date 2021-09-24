import React from 'react';
import HeroSection from './tailwindui/HeroSection';
import FeaturedSection from './tailwindui/FeaturedSection';
import CustomerReviews from './tailwindui/CustomerReviews';

const App = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <CustomerReviews />
    </div>
  );
};

export default App;
