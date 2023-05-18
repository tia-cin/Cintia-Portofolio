import bootstrap from "./images/bootstrap.png";
import git from "./images/git-icon.png";
import expressJs from "./images/expressJs-icon.png";
import javascript from "./images/javascript-icon.png";
import materialUi from "./images/materialUi-icon.png";
import mongodb from "./images/mongodb-icon.png";
import nextJs from "./images/nextJs-icon.png";
import nodeJs from "./images/nodeJs-icon.png";
import postgreSQL from "./images/postgreSQL-icon.png";
import react from "./images/react-icon.png";
import redux from "./images/redux-icon.png";
import tailwind from "./images/tailwind-icon.png";
import typescript from "./images/typescript-icon.png";

import photoshop from "./images/photoshop.png";
import illustrator from "./images/illustrator.png";
import premiere from "./images/premiere.png";
import figma from "./images/figma-icon.png";

import cintia from "./images/cintia-arce-profile.png";

import project1 from "./images/project-1.png";
import project2 from "./images/project-2.png";
import project3 from "./images/project-3.png";
import project4 from "./images/project-4.png";

const google =
  "https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png";
const microsoft =
  "https://www.freepngimg.com/thumb/microsoft/28413-3-microsoft-logo-transparent-background.png";
const harvard =
  "https://logos-world.net/wp-content/uploads/2020/12/Harvard-Emblem.png";
const freecodecamp =
  "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_large.png";

const ibmSkillbuild =
  "https://cityandguildsfoundation.org/wp-content/uploads/2022/08/Skillsbuild-logo.jpg";

export const profile = {
  topText: "Hi, I'm Cintia Arce",
  middleText: "Full Stack Developer",
  bottomText: "Showcasing My Passion for Software Engineering and Design",
  about:
    "This software engineer is an independent student with a strong background in full-stack web development and design. They have experience in developing real projects, including an e-commerce platform for comic book chapters with innovative tools. They also have a passion for design and have honed their skills in design programs such as Photoshop, Illustrator, and Premiere. They are looking to make an impact in the industry and are eager to learn and demonstrate their skills.",
  photo: cintia,
  techStack:
    "Our team is skilled in a range of programming languages and frameworks, enabling us to create powerful and efficient web applications that meet your business needs. With our full-stack tech stack, we can help you bring your project to life with the latest web development tools and techniques",
  style:
    "Our style tools empower us to create stunning and engaging user interfaces that leave a lasting impression on your visitors. Our design tools enable us to create stunning visuals and user interfaces that captivate and engage your audience. And with our animation tools, we can bring your website to life with dynamic and interactive elements that enhance the user experience",
};

export const colors = ["#ffce6d", "#ED5B2D", "#F7B9A1", "#51ABB2"];

export const technologies = {
  style: [
    {
      link: "https:/mui.com",
      logo: materialUi,
      alt: "Material-UI",
    },
    {
      link: "https://getbootstrap.com",
      logo: bootstrap,
      alt: "Bootstrap",
    },
    {
      link: "https://tailwind.com",
      logo: tailwind,
      alt: "Tailwind",
    },
  ],
  design: [
    {
      alt: "Photoshop",
      logo: photoshop,
      link: "https://www.photoshop.com/",
    },
    {
      alt: "Illustrator",
      logo: illustrator,
      link: "https://www.adobe.com/products/illustrator/free-trial-download.html",
    },
    {
      alt: "Premiere",
      logo: premiere,
      link: "https://www.adobe.com/products/premiere.html",
    },
    {
      alt: "Figma",
      logo: figma,
      link: "https://www.figma.com/",
    },
  ],
  animation: [
    {
      alt: "GSAP",
      link: "https://greensock.com/gsap/",
    },
    {
      alt: "ScrollTrigger",
      link: "https://greensock.com/scrolltrigger/",
    },
    {
      alt: "AnimeJS",
      link: "https://animejs.com/",
    },
    {
      alt: "CSS Animations",
      link: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
  ],
  development: [
    {
      link: "https://reactjs.org/",
      logo: react,
      alt: "React JS",
    },
    {
      link: "https://redux.js.org/",
      logo: redux,
      alt: "Redux",
    },
    {
      link: "https://www.typescriptlang.org/",
      logo: typescript,
      alt: "Typescript",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: javascript,
      alt: "Javascript",
    },
    {
      link: "https://nextjs.org/",
      logo: nextJs,
      alt: "NextJS",
    },
    {
      link: "https://expressjs.com",
      logo: expressJs,
      alt: "Express",
    },
    {
      link: "https://nodejs.org",
      logo: nodeJs,
      alt: "Nodejs",
    },
    {
      link: "https://www.postgresql.org",
      logo: postgreSQL,
      alt: "PostgreSQL",
    },
    {
      link: "https://www.mongodb.com/",
      logo: mongodb,
      alt: "MongoDB",
    },
    {
      link: "https://git-scm.com/",
      logo: git,
      alt: "Git",
    },
  ],
};

export const social = [
  {
    link: "https://linkedin.com/in/cintia-arce-profile",
    alt: "LinkedIn",
  },
  {
    link: "https://github.com/tia-cin",
    alt: "Github",
  },
];

export const projects = [
  {
    link: "https://dashboard-shoppy.vercel.app/",
    landing: project2,
    alt: "react-icon",
    title: "Dashboard",
    description: "Organize your team and projects",
  },
  {
    link: "https://techvibe-ecommerce.vercel.app/",
    landing: project4,
    alt: "ecommerce-store-icon",
    description: "Buy tech products in this ecommerce website",
    title: "TechVibe",
  },
  {
    link: "https://nft-langing.vercel.app/",
    landing: project3,
    alt: "landing-plane",
    description: "Landing Pages Templates for business",
    title: "Landing Plane",
  },
  {
    link: "https://nft-langing.vercel.app/",
    landing: project1,
    alt: "nft-market-landing",
    description: "Landing Page for NFT Market React Native App",
    title: "ProNef",
  },
];

export const certifications = [
  {
    title: "Information Technology Fundamentals",
    from: "IBM SkillsBuild",
    img: ibmSkillbuild,
  },
  {
    title: "Web Development Fundamentals",
    from: "IBM SkillsBuild",
    img: ibmSkillbuild,
  },
  {
    title: "Data Analysis Fundamentals",
    from: "Microsoft & LinkdIn",
    img: microsoft,
  },
  {
    title: "Software Development Fundamentals",
    from: "Microsoft & LinkedIn",
    img: microsoft,
  },
  {
    title: "Mobile Development",
    from: "Google Learning",
    img: google,
  },
  {
    title: "We Development Introduction I & II",
    from: "Google Learning",
    img: google,
  },
  { title: "Business Development", from: "Google Learning", img: google },
  {
    title: "Fundamentals of Digital MArketing",
    from: "Google Learning",
    img: google,
  },
  { title: "Cybersecurity", from: "Google Activate", img: google },
  {
    title: "Scientific Computing with Python",
    from: "freeCodeCamp",
    img: freecodecamp,
  },
  {
    title: "Front End Development Libraries",
    from: "freeCodeCamp",
    img: freecodecamp,
  },
  {
    title: "JavaScript Algorithms & Data Structure",
    from: "freeCodeCamp",
    img: freecodecamp,
  },
  { title: "Responsive Web Design", from: "freeCodeCamp", img: freecodecamp },
  {
    title: "Web Programming with Python & JavaScript",
    from: "CS50 Harvard",
    img: harvard,
  },
  {
    title: "Mobile App Development with React Native",
    from: "CS50 Harvard",
    img: harvard,
  },
  {
    title: "Introduction to Computer Science",
    from: "CS50 Harvard",
    img: harvard,
  },
];
