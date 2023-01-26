import { ITech } from '@/types';
import {
  Box,
  Flex,
  forwardRef,
  IconButton,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { FC } from 'react';

interface IProps {
  tech: ITech;
}

export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

export const StackCard: FC<IProps> = ({ tech }) => {
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <LinkBox
        as='article'
        w='100%'
        p={4}
        borderColor='gray.700'
        borderRadius={5}
        borderWidth='1px'
        transition='.5s'
        cursor='pointer'
        display='flex'
        role='group'
        _hover={{
          borderColor: 'orange.500',
        }}
      >
        <Flex alignItems='center' justifyContent='space-between'>
          <IconButton
            as='a'
            aria-label={tech.name}
            mr={3}
            bgColor='gray.700'
            _groupHover={{ color: 'orange.500' }}
            icon={tech.icon}
          />
          <LinkOverlay href={tech.url} rel='noopener' isExternal>
            <Flex>
              <Text size='sm' _hover={{ color: 'blue.500' }}>
                {tech.name}
              </Text>
            </Flex>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    </MotionBox>
  );
};
