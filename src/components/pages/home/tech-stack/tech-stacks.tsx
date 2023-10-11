import {
  SiTailwindcss,
  SiMaterialui,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiNestjs,
  SiExpress,
  SiAngular,
  SiJava,
  SiDotnet,
  SiBootstrap,
  SiElectron,
  SiKubernetes,
  SiCodeigniter,
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
    name: 'Angular',
    icon: <SiAngular fontSize='20px' />,
    url: 'https://angular.io/',
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss fontSize='20px' />,
    url: 'https://tailwindcss.com/',
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
    name: '.NET',
    icon: <SiDotnet fontSize='20px' />,
    url: 'https://dotnet.microsoft.com/es-es/',
  },
  {
    name: 'CodeIgniter',
    icon: <SiCodeigniter fontSize='20px' />,
    url: 'https://codeigniter.com/',
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
];

export const toolsTechStack: ITech[] = [
  {
    name: 'Linux',
    icon: <SiLinux fontSize='20px' />,
    url: 'https://www.linux.org/',
  },
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
    name: 'Kubernetes',
    icon: <SiKubernetes fontSize='20px' />,
    url: 'https://kubernetes.io/',
  },
];

export const othersTechStack: ITech[] = [
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
];
