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
} from '@chakra-ui/react';

// Projects Page
export const Page = () => {
  return (
    <Box as='main' maxW='5xl' mx='auto' p='8'>
      <Box mt='1' color='gray.200'>
        <Heading as='h1' fontSize='3xl' letterSpacing='wide'>
          Proyectos
        </Heading>
        <Text as='p' mt='3' color='gray.400'>
          Lista de proyectos personales código abierto disponibles en Github
        </Text>
      </Box>

      {/* List of projects */}

      <Grid
        templateColumns={['1fr', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
        gap={[2, 5, 5, 5]}
        mt='5'
      >
        {[1, 2].map((a) => (
          <MotionBox whileHover={{ y: -5 }} key={a}>
            <Card maxW='sm' boxShadow='xl'>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                border='lg'
                roundedTop='sm'
              />
              <CardBody bgColor='gray.900' rounded='sm'>
                <Stack mt='6' spacing='3'>
                  <Heading size='md' color='blue.500'>
                    Living room Sofa
                  </Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                  <HStack>
                    <Badge rounded='md' px='1.5'>
                      Default
                    </Badge>
                    <Badge rounded='md' px='1.5'>
                      Default
                    </Badge>
                    <Badge rounded='md' px='1.5'>
                      Default
                    </Badge>
                  </HStack>
                </Stack>
              </CardBody>
            </Card>
          </MotionBox>
        ))}
      </Grid>

      <Divider my='10' />

      <Grid
        templateColumns={['1fr', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
        gap={[2, 5, 5, 5]}
        my='5'
      >
        {[1, 2, 3, 4, 5, 6].map((a) => (
          <MotionBox whileHover={{ y: -5 }} key={a}>
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
              <LinkOverlay href={'/about'} rel='noopener' isExternal>
                <Flex flexDirection='column' color='blue.500'>
                  <Heading as='h1' fontSize='xl' letterSpacing='wide'>
                    Proyectos
                  </Heading>
                  <Text as='p' mt='3' color='gray.400'>
                    Lista de proyectos personales código abierto disponibles en
                    Github
                  </Text>
                </Flex>
              </LinkOverlay>
            </LinkBox>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
};
