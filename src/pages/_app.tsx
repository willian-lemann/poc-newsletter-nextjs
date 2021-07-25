import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="nextjs" key="title" />

        <title>next js</title>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
