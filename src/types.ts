//tech stack
import html from "./assets/tech stack/HTML5.svg";
import css from "./assets/tech stack/CSS3.svg";
import javascript from "./assets/tech stack/Javascript.svg";
import reactjs from "./assets/tech stack/React JS.svg";
import redux from "./assets/tech stack/Redux.svg";
import typescript from "./assets/tech stack/Typescript.svg";
import nodejs from "./assets/tech stack/Nodejs.svg";
import express from "./assets/tech stack/Express.svg";
import babel from "./assets/tech stack/Babel.svg";
import bash from "./assets/tech stack/Bash.svg";
import git from "./assets/tech stack/Git.svg";
import jest from "./assets/tech stack/Jest.svg";
import mocha from "./assets/tech stack/Mocha.svg";
import postgresql from "./assets/tech stack/Postgresql.svg";
import sqlite from "./assets/tech stack/SQLite.svg";
import webpack from "./assets/tech stack/Webpack.svg";
// projects
import weatherapp from "./assets/projects/cloudy.png";
import mangaka from "./assets/projects/mangaca-icon.png";
import dictionary from "./assets/projects/dictionary.png";
import musicapp from "./assets/projects/music-app.png";

export const technologies = {
  frontend: [
    {
      link: "https://www.w3.org/html/",
      logo: html,
      alt: "HTML5",
    },
    {
      link: "https://www.w3schools.com/css/",
      logo: css,
      alt: "CSS3",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: javascript,
      alt: "Javascript",
    },
    {
      link: "https://reactjs.org/",
      logo: reactjs,
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
  ],
  backend: [
    {
      link: "https://nodejs.org",
      logo: nodejs,
      alt: "Nodejs",
    },
    {
      link: "https://expressjs.com",
      logo: express,
      alt: "Express",
    },
  ],
  testing: [
    {
      link: "https://jestjs.io",
      logo: jest,
      alt: "Jest",
    },
    {
      link: "https://mochajs.org",
      logo: mocha,
      alt: "Mocha",
    },
  ],
  database: [
    {
      link: "https://www.postgresql.org",
      logo: postgresql,
      alt: "PostgreSQL",
    },
    {
      link: "https://www.sqlite.org/index.html",
      logo: sqlite,
      alt: "SQLite",
    },
  ],
  others: [
    {
      link: "https://git-scm.com/",
      logo: git,
      alt: "Git",
    },
    {
      link: "https://www.gnu.org/software/bash/",
      logo: bash,
      alt: "Bash",
    },
    {
      link: "https://webpack.js.org/",
      logo: webpack,
      alt: "Webpack",
    },
    {
      link: "https://babel.dev/",
      logo: babel,
      alt: "Babel",
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
    link: "https://weather-app-tia-cin.vercel.app",
    logo: weatherapp,
    alt: "cloud-icon",
    title: "Weather Now",
    description: "Real time weather information about any city in the world",
  },
  {
    link: "https://deploy-client-kappa.vercel.app/",
    logo: mangaka,
    alt: "mangaka-icon",
    description: "E-Commerse app for manga/comics with reader",
    title: "Mangaka",
  },
  {
    link: "https://music-app-self.vercel.app",
    title: "Music App",
    description: "Song player app made with Vue JS",
    logo: musicapp,
    alt: "music-app-icon",
  },
  {
    link: "https://dictionary-app-omega.vercel.app",
    logo: dictionary,
    alt: "dictionary-app-icon",
    description: "Search any word and find about their definition",
    title: "Dictionary App",
  },
];

export const skills = {
  design: [
    {
      name: "Photoshop",
      image: "",
      link: "https://www.photoshop.com/",
    },
    {
      name: "Illustrator",
      image: "",
      link: "https://www.adobe.com/products/illustrator/free-trial-download.html",
    },
    {
      name: "Premiere",
      image: "",
      link: "https://www.adobe.com/products/premiere.html",
    },
    {
      name: "Figma",
      image: "",
      link: "https://www.figma.com/",
    },
  ],
  soft: [
    {
      name: "Team-player",
      image: "",
    },
    {
      name: "Fast-learner",
      image: "",
    },
    {
      name: "Creativity",
      image: "",
    },
    {
      name: "Curious",
      image: "",
    },
    {
      name: "Problem-solver",
      image: "",
    },
  ],
};
