import { Layout } from '@/components/layout';
import generalStyles from '@/styles/general';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@fontsource/inter';
import { Global } from '@emotion/react';

export const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Global styles={generalStyles} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
