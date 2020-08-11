import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const theme = {};

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </React.Fragment>
  );
}

export default MyApp;
