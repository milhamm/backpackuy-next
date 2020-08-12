import React from 'react';
import { Hero } from 'components/Home';
import { SEO } from 'components/SEO';

export const config = { amp: 'hybrid' };

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <SEO />
      <Hero />
    </React.Fragment>
  );
};

export default Home;
