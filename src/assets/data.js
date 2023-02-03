import img1 from './images/moonandme.png';
import img2 from './images/GW.png';
import img3 from './images/hoodie.png';

export const navData = [
  {
    title: 'home',
    path: '/',
    cls: 'nav_item',
    id: 1,
  },
  {
    title: 'about',
    path: '/about',
    cls: 'nav_item',
    id: 2,
  },
  {
    title: 'todo',
    path: '/todo',
    cls: 'nav_item',
    id: 3,
  },
  {
    title: 'contact',
    path: '/contact',
    cls: 'nav_item',
    id: 4,
  },
];

export const itemData = [
  {
    title: 'My coding experience',
    img: img1,
    text: 'I have been coding intensively the past 2 years, I have also taken courses on JAVA (basic level) and C# (Basic + level). \nMy main focus has been on html, css and javascript, web-development. I also tried out a few frameworks smaller project in vue, and most projects are done in React or Nextjs. I also like animations and have worked with anime.js and framer-motion. For styling I worked with css, I prefer sass or css.modules, also worked with styled-components is very useful with react, or a smaller libraray called Goober. I have done a few projects You can check out my Portfolio page for that check link below, all done in "vanilla" js, html and css :D',
    link: 'https://www.robertwagar.se',
  },
  {
    title: 'My project, DC - dance-connect',
    img: img2,
    text: 'So for this assignment I wanna do a project, a school app, for teachers and students, controlled by and admin with crud functionality, might try a fake api, or try to build one in mongoDB, firebase or SQL :O If I succeed might be a bigger project, also have all teacher get an attendance list, students see schedule and updates / news, a calendar. And a chat system to communicate, maybe. ',
  },
  {
    title: 'For styling',
    img: img3,
    text: 'I will go with sass, react-icons, framer motion, for the layout or tamplate i will try to create something that is not to hard to navigate in. A nice UI that is easy to understand',
  },
  {
    title: '?',
    img: '',
    text: 'what is going on here',
  },
];
