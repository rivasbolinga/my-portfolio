import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandSass,
} from 'react-icons/tb';

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

export const languages = [
  {
    id: 1,
    name: 'JavaScript',
    icon: TbBrandJavascript,
  },

  { id: 2, skill: 'HTML', icon: TbBrandHtml5 },
  { id: 3, skill: 'CSS', icon: TbBrandCss3 },
  { id: 3, skill: 'SASS', icon: TbBrandSass },
];
export default links;
