import React from 'react';
import { Hero, Features } from 'components/Home';
import { SEO } from 'components/SEO';

export const config = { amp: true };

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <SEO />
      <Hero />
      <Features />
    </React.Fragment>
  );
};

export default Home;
