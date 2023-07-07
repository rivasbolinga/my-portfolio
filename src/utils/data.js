import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandSass,
  TbBrandBootstrap,
  TbBrandReact,
  TbBrandRedux,
} from 'react-icons/tb';
import {
  SiVitest,
  SiJest,
} from 'react-icons/si';

const links = [
  {
    id: '1',
    text: 'home',
    url: '/',
    content: '',
    isHovered: false,
  },
  {
    id: '2',
    text: 'about',
    url: '/about',
    content: 'andrea',
    isHovered: false,
  },
  {
    id: '3',
    text: 'works',
    url: '/works',
    content: 'rivas',
    isHovered: false,
  },
  {
    id: '4',
    text: 'contact',
    url: '/contact',
    content:
      'Welcome to my world of web wizardry, where design meets code and user experience becomes extraordinary – I am your extraordinaire front-end developer!',
    isHovered: false,
  },
];

// const aboutMe = {
//   headings: [ 'Hello']
// }

export const languages = {
  name: 'Languages',
  items: [
    { id: 1, name: 'JavaScript', icon: TbBrandJavascript },
    { id: 2, name: 'HTML', icon: TbBrandHtml5 },
    { id: 3, name: 'CSS', icon: TbBrandCss3 },
    { id: 4, name: 'SASS', icon: TbBrandSass },
  ],
};

export const frameworks = {
  name: 'Frameworks and libraries',
  items: [
    { id: 1, name: 'Bootstrap', icon: TbBrandBootstrap },
    { id: 2, name: 'React', icon: TbBrandReact },
    { id: 3, name: 'Redux', icon: TbBrandRedux },
    { id: 4, name: 'Vitest', icon: SiVitest },
    { id: 4, name: 'Jest', icon: SiJest },
  ],
};

export default links;
