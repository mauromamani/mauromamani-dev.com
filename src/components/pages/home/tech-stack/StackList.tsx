import { ITech } from '@/types';
import {
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
  Box,
  Text,
} from '@chakra-ui/react';
import { StackCard } from './StackCard';
import { backTechStack, frontTechStack, toolsTechStack } from './tech-stacks';

export const StackList = () => {
  const TabPanelNode = (techStack: ITech[]) => (
    <TabPanel>
      <Grid
        templateColumns={[
          '1fr',
          'repeat(2,1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={[2, 5, 5, 5]}
      >
        {techStack.map((stack) => (
          <StackCard tech={stack} key={stack?.name} />
        ))}
      </Grid>
    </TabPanel>
  );

  return (
    <Box as='section' w='75%' mx='auto' mt='10'>
      <Box textAlign={['center', 'center', 'left']}>
        <Heading as='h2' fontSize='3xl' mt='2' mb='5'>
          TECNOLOGÍAS
        </Heading>
        <Text as='p' fontSize='lg' color='gray.400'>
          Lista de mis tecnologías y herramientas favoritas
        </Text>
      </Box>

      {/* Tabs */}
      <Tabs variant='solid-rounded' colorScheme='orange' mt={5}>
        <TabList flexDirection={['column', 'column', 'row']}>
          <Tab mx={2}>Frontend</Tab>
          <Tab mx={2}>Backend</Tab>
          <Tab mx={2}>Herramientas</Tab>
        </TabList>

        <TabPanels>
          {TabPanelNode(frontTechStack)}
          {TabPanelNode(backTechStack)}
          {TabPanelNode(toolsTechStack)}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
