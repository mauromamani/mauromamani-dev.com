import { Box, Button, useColorMode, VStack } from '@chakra-ui/react';
import { StackList } from '@/components/pages/home/tech-stack/StackList';
import { Hero } from './hero';

export const Page = () => {
  return (
    <VStack spacing='32' pb='20'>
      <Box as='section' w='100%' px='8'>
        {/* Hero Section */}
        <Hero />

        {/* Stack List Section */}
        <StackList />
      </Box>
    </VStack>
  );
};
