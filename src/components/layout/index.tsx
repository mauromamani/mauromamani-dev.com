import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from '../navbar';

interface IProps {
  children?: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mauro Mamani - Analista Programador Universitario</title>
        <meta name='description' content='Portafolio personal' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/cat.svg' />
      </Head>
      <main>
        <Box
          minH='100vh'
          bgGradient={['linear(to-br, gray.800, #181924)']}
          color='gray.200'
        >
          <Navbar />
          {children}
        </Box>
      </main>
    </>
  );
};
