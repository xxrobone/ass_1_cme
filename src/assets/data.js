import img1 from "./images/moonandme.png";
import img2 from "./images/GW.png";
import img3 from "./images/hoodie.png";

export const navData = [
  {
    title: "home",
    path: "/",
    cls: "nav_item",
    id: 1,
  },
  {
    title: "about",
    path: "/about",
    cls: "nav_item",
    id: 2,
  },
  {
    title: "todo",
    path: "/todo",
    cls: "nav_item",
    id: 3,
  },
  {
    title: "contact",
    path: "/contact",
    cls: "nav_item",
    id: 4,
  },
];

export const itemData = [
  {
    title: "My coding experience",
    img: img1,
    text: "I have been coding for about 2 years and I have worked with html, css, javascript. (also a little bit of PHP, C# & JAVA.) Frameworks I tested, Vue, Nextjs, mostly worked with React. Some wordpress, used it as a cms in a nextjs project, with GraphQl, sass, framer-motion, react-icons, ",
    link: "https://www.robertwagar.se",
    id: 1,
  },
  {
    title: "Fullmoon calendar - (week3)",
    img: img2,
    text: "It supposed to be simple so I think this would be do-able, not to hard. Just have a countdown that show days until next fullmoon. If I keep adding is an other story",
    id: 2,
  },
  {
    title: "For styling",
    img: img3,
    text: "I will go with sass, react-icons, framer motion, for the layout or tamplate i will try to create something that is not to hard to navigate in. A nice UI that is easy to understand",
    id: 3,
  },
  {
    title: "?",
    img: "",
    text: "what is going on here",
    id: 4,
  },
];
