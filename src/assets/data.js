import img1 from './images/moonandme.png';
import img2 from './images/GW.png';
import img3 from './images/fullmoonwolf.png';
import img4 from './images/nothing.gif';

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
    text: "I have been coding for about 2 years and I have worked with html, css, javascript, a little node but need to get better at it, (also a little bit of PHP on my 6month internship, C# & JAVA on komvux courses.) Frameworks I worked with React, Nextjs and tried out vue. Also wordpress, build simple sites, build acf's, used it as a cms in a nextjs project, with GraphQl, sass, framer-motion, react-icons, and I also played around with some animejs. For backend I used MongoDb, firebase and MySql, minor knowledge. ",
    link: 'https://www.robertwagar.se',
    id: 1,
  },
  {
    title: 'Fullmoon calendar - (week3)',
    img: img2,
    text: `It supposed to be simple so I think this would be do-able, not to hard. Just have a countdown that show days until next fullmoon. If I keep adding is an other story. ${`\n`}But if I would do a bigger project I would do an admin kind of app for a dance school where teachers and students can see the schedule, students can see changes in schedule and teachers can take attendance, also for the admin to be able to add, delete, edit students and teachers and write changes to schedule and have a news section, this would need a backend thou. `,
    id: 2,
  },
  {
    title: 'For styling',
    img: img3,
    text: 'I will go with sass, or styled-components, react-icons, framer motion, want to have an svg moon that changes postions depending on how many days is left for next fullmoon, for the layout or tamplate i will try to create something that is not to hard to navigate in. A nice UI that is easy to understand, if we have to use and other template or design then I will do my best to implement it on the project',
    link: 'https://dribbble.com/shots/6087619-Landscapes-02',
    id: 3,
  },
  {
    title: 'Thats All folks',
    img: img4,
    text: 'Nothing more to see here, could add more articles :D',
    id: 4,
  },
];
