import {
  Box,
  VStack,
  Image,
  Heading,
  HStack,
  Button,
  Stack,
  Link,
} from '@chakra-ui/react';
import { CgAlbum } from 'react-icons/cg';

export const Hero = () => {
  return (
    <Box maxW='2xl' mx='auto'>
      <VStack pt='24' pb='12' spacing='5' textAlign='center'>
        <Box rounded='full' p='1' bgColor='blue.500'>
          <Image src='/cat.svg' boxSize='120px' alt='logo' />
        </Box>

        <Box pt='5'>
          <Heading
            as='h1'
            fontFamily='body'
            bgColor='orange.400'
            bgClip='text'
            bgGradient='linear(to-l, #C05621, #ED8936)'
            size='2xl'
            className='shine'
          >
            Mauro B. Mamani
          </Heading>
        </Box>

        <Box>
          <Heading
            as='h2'
            size='md'
            lineHeight='tall'
            color='gray.500'
            fontWeight='medium'
          >
            Apasionado en el{' '}
            <Box as='span' color='gray.300'>
              Diseño
            </Box>{' '}
            y{' '}
            <Box as='span' color='gray.300'>
              Desarrollo{' '}
            </Box>
            de aplicaciones.
          </Heading>
        </Box>
      </VStack>
    </Box>
  );
};
