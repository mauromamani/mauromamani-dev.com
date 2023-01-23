import { Box, VStack, Image, Heading } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <VStack spacing='32'>
      <Box
        as='section'
        w='100%'
        px='8'
        bgGradient={['linear(to-br, gray.800, #181924)']}
      >
        <Box maxW='2xl' mx='auto'>
          {/* Jumbotron */}
          <VStack alignItems='center' justifyContent='center' pt='24' pb='12'>
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
                size='sm'
                lineHeight='tall'
                color='gray.500'
                fontWeight='medium'
              >
                Apasionado en{' '}
                <Box as='span' color='gray.300'>
                  Diseño
                </Box>{' '}
                y{' '}
                <Box as='span' color='gray.300'>
                  Desarrollo de aplicaciones
                </Box>
                .
              </Heading>
            </Box>
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
};

export default HomePage;
