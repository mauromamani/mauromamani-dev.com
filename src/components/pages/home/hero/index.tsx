import { Box, VStack, Image, Heading, HStack, Button } from '@chakra-ui/react';
import { CgAlbum, CgMail } from 'react-icons/cg';

export const Hero = () => {
  return (
    <Box maxW='2xl' mx='auto'>
      <VStack
        alignItems='center'
        justifyContent='center'
        pt='24'
        pb='12'
        spacing='5'
      >
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
            className='jumbotron'
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

        {/* Buttons */}
        <HStack>
          <Button
            variant='solid'
            colorScheme='orange'
            rounded='md'
            leftIcon={<CgAlbum size='20px' />}
          >
            Currículum
          </Button>
          <Button
            variant='solid'
            colorScheme='twitter'
            rounded='md'
            leftIcon={<CgMail size='20px' />}
          >
            Contáctame
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
