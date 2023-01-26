import {
  Box,
  chakra,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Link = chakra('a', {
  baseStyle: {
    py: 2,
    px: 4,
    rounded: 'sm',
    _hover: {
      textDecoration: 'none',
      bgColor: 'gray.900',
      transitionDuration: '300ms',
    },
    cursor: 'pointer',
    transitionDuration: '300ms',
    borderWidth: 1,
    fontWeight: 'bold',
  },
});

export const Page = () => {
  const HeadingNode = () => (
    <HStack>
      <Box rounded='full' p='1' bgColor='blue.500'>
        <Image src='/cat.svg' boxSize='100px' alt='logo' />
      </Box>
      <VStack align='left'>
        <Heading as='h1' size='xl' fontWeight='normal'>
          Mauro Benjamín Mamani
        </Heading>
        <Heading as='h2' size='sm' fontWeight='light'>
          Analista Programador Universitario
        </Heading>
      </VStack>
    </HStack>
  );

  const BioDescriptionNode = () => (
    <Box as='article' mt='5'>
      <VStack spacing='7'>
        <Text letterSpacing='wide'>
          Soy un desarrollador full stack JavaScript . Mi experiencia incluye el
          uso de herramientas como{' '}
          <Box as='span' fontWeight='bold'>
            React, Angular, Vue.js y Express
          </Box>{' '}
          para crear aplicaciones con una interfaz de usuario dinámica y una
          arquitectura de back-end sólida.
        </Text>
        <Text>
          Soy una persona dedicada, con una mentalidad de aprendizaje continuo y
          una pasión por el desarrollo de soluciones innovadoras y eficientes.
          Me gusta trabajar en equipo y tengo habilidades de comunicación y
          liderazgo para asegurar que los proyectos se completen a tiempo y
          dentro del presupuesto.
        </Text>
      </VStack>
    </Box>
  );

  const SocialLinksNode = () => (
    <Box mt='5'>
      <HStack spacing='5'>
        <Link
          bg='#333'
          color='#fff'
          borderColor='gray.600'
          _hover={{}}
          href='https://github.com/mauromamani'
        >
          <HStack spacing='2' alignItems='center'>
            <Box as={IoLogoGithub} />
            <Text>Github</Text>
          </HStack>
        </Link>

        <Link
          bg='#0e76a8'
          color='#fff'
          borderColor='blue.400'
          _hover={{}}
          href='https://www.linkedin.com/in/mauromamani/'
        >
          <HStack spacing='2' alignItems='center'>
            <Box as={IoLogoLinkedin} />
            <Text>LinkedIn</Text>
          </HStack>
        </Link>
      </HStack>
    </Box>
  );

  return (
    <Box as='main' maxW='2xl' mx='auto' p='8'>
      {HeadingNode()}
      {BioDescriptionNode()}
      {SocialLinksNode()}
    </Box>
  );
};
