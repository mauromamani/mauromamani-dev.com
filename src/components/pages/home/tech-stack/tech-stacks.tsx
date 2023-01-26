import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiChakraui,
  SiMaterialui,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiNestjs,
  SiExpress,
  SiAngular,
  SiJava,
  SiDotnet,
  SiBootstrap,
  SiElectron,
} from 'react-icons/si';
import { FaReact, FaGitAlt, FaVuejs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { ITech } from '@/types';

export const frontTechStack: ITech[] = [
  {
    name: 'React',
    icon: <FaReact fontSize='20px' />,
    url: 'https://reactjs.org/',
  },
  {
    name: 'NextJS',
    icon: <TbBrandNextjs fontSize='20px' />,
    url: 'https://nextjs.org/',
  },
  {
    name: 'Typescript',
    icon: <SiTypescript fontSize='20px' />,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Javascript',
    icon: <SiJavascript fontSize='20px' />,
    url: 'https://www.javascript.com/',
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss fontSize='20px' />,
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Chakra UI',
    icon: <SiChakraui fontSize='20px' />,
    url: 'https://chakra-ui.com/',
  },
];

export const backTechStack: ITech[] = [
  {
    name: 'NestJS',
    icon: <SiNestjs fontSize='20px' />,
    url: 'https://nestjs.com/',
  },
  {
    name: 'Express',
    icon: <SiExpress fontSize='20px' />,
    url: 'https://expressjs.com/es/',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb fontSize='20px' />,
    url: 'https://www.mongodb.com/es',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql fontSize='20px' />,
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'MySQL',
    icon: <SiMysql fontSize='20px' />,
    url: 'https://www.mysql.com/',
  },
];

export const toolsTechStack: ITech[] = [
  {
    name: 'Git & Github',
    icon: <FaGitAlt fontSize='20px' />,
    url: 'https://www.github.com/',
  },
  {
    name: 'Docker',
    icon: <SiDocker fontSize='20px' />,
    url: 'https://www.docker.com/',
  },
  {
    name: 'Linux',
    icon: <SiLinux fontSize='20px' />,
    url: 'https://www.linux.org/',
  },
];

export const othersTechStack: ITech[] = [
  {
    name: 'Angular',
    icon: <SiAngular fontSize='20px' />,
    url: 'https://angular.io/',
  },
  {
    name: 'Vuejs',
    icon: <FaVuejs fontSize='20px' />,
    url: 'https://vuejs.org/',
  },
  {
    name: 'Electron',
    icon: <SiElectron fontSize='20px' />,
    url: 'https://www.electronjs.org/es/',
  },
  {
    name: 'Material UI',
    icon: <SiMaterialui fontSize='20px' />,
    url: 'https://mui.com/',
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap fontSize='20px' />,
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'Java',
    icon: <SiJava fontSize='20px' />,
    url: 'https://www.java.com/es/',
  },
  {
    name: '.Net',
    icon: <SiDotnet fontSize='20px' />,
    url: 'https://dotnet.microsoft.com/es-es/',
  },
];
