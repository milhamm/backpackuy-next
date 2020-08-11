import React from 'react';
import Hero from 'components/Hero';
import SEO from 'components/SEO';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <SEO />
      <Hero />
    </React.Fragment>
  );
};

export default Home;
