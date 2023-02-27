import { FC } from 'react';
import NextLink from 'next/link';
import { Box, HStack, chakra } from '@chakra-ui/react';
// import Image from 'next/image';
import { Image } from '@chakra-ui/react';

interface INavLink {
  url: string;
  title: string;
}

const LINKS: INavLink[] = [
  {
    url: '/projects',
    title: 'Proyectos',
  },
  {
    url: '/about',
    title: 'Sobre mí',
  },
];

const Link = chakra('a', {
  baseStyle: {
    py: 2,
    px: 4,
    rounded: 'md',
    _hover: {
      textDecoration: 'none',
      bgColor: 'gray.900',
      transitionDuration: '300ms',
    },
    cursor: 'pointer',
    transitionDuration: '300ms',
  },
});

interface IProps {}

export const Navbar: FC<IProps> = () => {
  const socialLinks = () => {
    return (
      <HStack>
        <Link href='https://github.com/mauromamani' target='_blank'>
          Github
        </Link>
        <Link href='https://www.linkedin.com/in/mauromamani/' target='_blank'>
          LinkedIn
        </Link>
      </HStack>
    );
  };

  const menuLinks = () => {
    return (
      <HStack flexWrap='wrap' justifyContent='center' alignItems='center'>
        {LINKS.map((link: INavLink) => (
          <Link as={NextLink} href={link.url} key={link.url}>
            {link.title}
          </Link>
        ))}
        {socialLinks()}
      </HStack>
    );
  };

  return (
    <Box
      py='2'
      px='4'
      as='header'
      zIndex={1}
      borderTopWidth={5}
      borderColor='orange.300'
      bgColor='gray.800'
      fontWeight='normal'
    >
      <HStack
        justifyContent='space-between'
        flexDir={['column', 'column', 'row']}
      >
        <Link _hover={{}} href='/'>
          <Image src='/cat.svg' boxSize='40px' alt='logo' className='shine' />
        </Link>
        {menuLinks()}
      </HStack>
    </Box>
  );
};
