import { MotionBox } from '@/components/framer-motion/MotionBox';
import {
  Box,
  Heading,
  LinkBox,
  Text,
  Flex,
  Grid,
  LinkOverlay,
  CardBody,
  Card,
  Image,
  Stack,
  HStack,
  Badge,
  Divider,
  chakra,
} from '@chakra-ui/react';

const Link = chakra('a', {
  baseStyle: {
    border: 'none',
    cursor: 'pointer',
  },
});

interface IMainProject {
  title: string;
  description: string;
  image: string;
  badges: string[];
  github: string;
}

interface ISecondaryProject {
  title: string;
  description: string;
  github: string;
}

const mainProjects: IMainProject[] = [
  {
    title: 'Gestión de Óptica',
    description:
      'Incluye las siguientes funcionalidades: Inicio de sesión, Administración de usuarios, Administración de clientes, Administración de inventario, Procesamiento de ventas, Gestión de proveedores, Generación de informes',
    image: '/optica.webp',
    badges: ['.NET', 'C#', 'Windows Forms'],
    github: 'https://github.com/mauromamani/gestion-optica',
  },
  {
    title: 'Gestión de Mueblería',
    description:
      'Incluye las siguientes funcionalidades: Inicio de sesión, Administración de usuarios, Administración de clientes, Administración de inventario, Procesamiento de ventas, Gestión de proveedores',
    image: '/muebleria.webp',
    badges: ['.NET', 'C#', 'WPF'],
    github: 'https://github.com/mauromamani/gestion-muebleria',
  },
];

const secondaryProjects: ISecondaryProject[] = [
  {
    title: 'Markdown Editor',
    description:
      'Aplicación de escritorio que permite transformar markdown a un texto formateado, ideal para escribir un archivo README de manera eficaz',
    github: 'https://github.com/mauromamani/markdown-editor',
  },
  {
    title: 'Next Blog',
    description:
      'Blog personal con el cual se pueden subir artículos en formato Markdown, desplegado en Vercel',
    github: 'https://github.com/mauromamani/next-blog',
  },
  {
    title: 'Portafolio Personal',
    description:
      'Mi portafolio en donde exhibo mis proyectos, mis tecnologias y herramientas favoritas, y un poco sobre mí',
    github: 'https://github.com/mauromamani/mauromamani-dev.com',
  },
  {
    title: 'Gestión de empleados',
    description:
      'Aplicación para el control, carga de datos y seguimiento de empleados de una cooperativa',
    github: 'https://github.com/mauromamani/gestion-de-empleados',
  },
];

// Projects Page
export const Page = () => {
  return (
    <Box as='main' maxW='5xl' mx='auto' p='8'>
      <Box mt='1' color='gray.200' textAlign={{ sm: 'center', md: 'left' }}>
        <Heading as='h1' fontSize='3xl' letterSpacing='wide'>
          Proyectos
        </Heading>
        <Text as='p' mt='3' color='gray.400'>
          Lista de proyectos personales código abierto disponibles en Github
        </Text>
      </Box>

      {/* List of projects */}

      <Flex justifyContent='center'>
        <Grid
          templateColumns={['1fr', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
          gap={[2, 5, 5, 5]}
          mt='5'
        >
          {mainProjects.map((mProject) => (
            <MotionBox whileHover={{ y: -5 }} key={mProject.title}>
              <Card maxW='lg' boxShadow='xl'>
                <Image
                  src={mProject.image}
                  alt='Green double couch with wooden legs'
                  border='lg'
                  roundedTop='sm'
                />
                <CardBody bgColor='gray.900' rounded='sm'>
                  <Stack mt='6' spacing='3'>
                    <Link href={mProject.github} target='_blank'>
                      <Heading size='md' color='blue.500'>
                        {mProject.title}
                      </Heading>
                    </Link>
                    <Text textColor='gray.400'>{mProject.description}</Text>
                    <HStack>
                      {mProject.badges.map((badge) => (
                        <Badge rounded='md' px='1.5' key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            </MotionBox>
          ))}
        </Grid>
      </Flex>

      <Divider my='10' />

      <Grid
        templateColumns={['1fr', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
        gap={[2, 5, 5, 5]}
        my='5'
      >
        {secondaryProjects.map((sProject) => (
          <MotionBox whileHover={{ y: -5 }} key={sProject.title}>
            <LinkBox
              as='article'
              w='100%'
              p={4}
              borderColor='gray.700'
              borderRadius={5}
              borderWidth='1px'
              bgColor='gray.900'
              transition='.5s'
              cursor='pointer'
              display='flex'
              role='group'
              _hover={{
                borderColor: 'blue.500',
              }}
            >
              <LinkOverlay href={sProject.github} rel='noopener' isExternal>
                <Flex flexDirection='column' color='blue.500'>
                  <Heading as='h1' fontSize='xl' letterSpacing='wide'>
                    {sProject.title}
                  </Heading>
                  <Text as='p' mt='3' color='gray.400'>
                    {sProject.description}
                  </Text>
                </Flex>
              </LinkOverlay>
            </LinkBox>
          </MotionBox>
        ))}
      </Grid>

      <Heading size='md' color='blue.500' mt='5' mb='8'>
        Más proyectos disponibles en{' '}
        <Link
          href='https://github.com/mauromamani?tab=repositories'
          _hover={{
            borderBottom: '1px',
            borderColor: 'gray.300',
          }}
          target='_blank'
        >
          Github
        </Link>
      </Heading>
    </Box>
  );
};
