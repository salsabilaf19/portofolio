import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  php,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  gowisata,
  bms,
  zoacare,
  mytodolist,
  uns,
  cms,
  aiesec,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  pertamedika,
  dcc,
  kelhel,
  microverse,
  pacificgarden,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: frontend,
  },
  {
    title: 'Fullstack Developer',
    icon: backend,
  },
  {
    title: 'Project Manager',
    icon: ux,
  },
  {
    title: 'System Analyst',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'php',
    icon: php,
  },
];

const experiences = [
  {
    title: 'Software Engineer@RSPC',
    company_name: 'PT Pertamina Bina Medika PERTAMEDIKA',
    icon: pertamedika,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
  },
  {
    title: 'Junior Fullstack Developer',
    company_name: 'PACIFIC GARDEN',
    icon: pacificgarden,
    iconBg: '#333333',
    date: 'Dec 2022 - July 2023',
  },
  {
    title: 'Assistant Lecturer of Mathematics Computation',
    company_name: 'Sebelas Maret University',
    icon: uns,
    iconBg: '#333333',
    date: 'Aug 2022 - Nov 2022',
  },
  {
    title: 'Assistant Lecturer of Database',
    company_name: 'Sebelas Maret University',
    icon: uns,
    iconBg: '#333333',
    date: 'Mar 2022 - Aug 2022',
  },
  {
    title: 'Junior Web Developer',
    company_name: 'Pratama Cipta Solusindo',
    icon: cms,
    iconBg: '#333333',
    date: 'Jan 2022 - Nov 2022',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Pratama Cipta Solusindo',
    icon: cms,
    iconBg: '#333333',
    date: 'Aug 2021 - Jan 2022',
  },
  {
    title: 'EduVaganza Project Manager',
    company_name: 'AIESEC in UNS',
    icon: aiesec,
    iconBg: '#333333',
    date: 'Feb 2021 - Jan 2022',
  },
  {
    title: 'Project Management Mentor',
    company_name: 'Creative and Innovative School',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2021 - Oct 2021',
  },
  {
    title: 'Help Desk SM SMMD Pascasarjana',
    company_name: 'UPT TIK UNS',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jun 2021 - Oct 2021',
  },
  {
    title: 'Organizing Committee Program EduVaganza',
    company_name: 'AIESEC in UNS',
    icon: aiesec,
    iconBg: '#333333',
    date: 'Feb 2020 - Jan 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Go-Wisata v.2.0',
    description: 'Go-Wisata helps you to find the coolest and most fun tourist attractions at the best prices. Find your vacation spot now!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: gowisata,
    repo: 'https://github.com/salsabilaf19?tab=repositories',
    demo: 'https://go-wisata.id/',
  },
  {
    id: 'project-2',
    name: 'BMS V.1.0',
    description:
      'Building Management System (BMS) is a system to track a monthly apartment bills.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: bms,
    repo: 'https://github.com/salsabilaf19?tab=repositories',
    demo: 'https://bms.indopasifik.co.id/',
  },
  {
    id: 'project-3',
    name: 'ZoaCare',
    description: 'Zoacare is a web-based animal charity platform that allows users to create an urgent report informing of dangerous animal invasions or requesting an animal rescue. Users can donate (in the form of funds, food, and kits) and open adoptions. The submitted reports, donations, and adoptions are managed by administrators.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: zoacare,
    repo: 'https://github.com/RistanAA/cemara-project-backend',
    demo: 'https://zoacare.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'SpoTwofy Clone Code',
    description: `A clone code apps of the Spotify.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/salsabilaf19/spotwofy-clonecode-react',
    demo: 'https://github.com/salsabilaf19/spotwofy-clonecode-react',
  },
  {
    id: 'project-5',
    name: 'My Todo List - Mini Task',
    description:
      'A mini task of my todo list, built using React JS',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: mytodolist,
    repo: 'https://github.com/salsabilaf19/mytodolist.github.io',
    demo: 'https://salsabilaf19.github.io/mytodolist.github.io/',
  },
];

export { services, technologies, experiences, projects };
