import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from 'components/Navbar';
import { SEOAll } from 'components/SEO/SEOAll';
import { colors } from 'utils/variables';

const theme = {};

const GlobalStyle = createGlobalStyle`
  body, * {
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif;
  }
  
`;

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <React.Fragment>
      <SEOAll />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default MyApp;
