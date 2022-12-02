import karozImg from "./assets/karoz-img.webp";
import sensuro from "./assets/sensuro.webp";
import restaurantPage from "./assets/restaurant-page.webp";
import cvGenerator from "./assets/cv-generator.webp";
import lazyReader from "./assets/lazyreader.webp";
import premy from "./assets/premy.webp";
import quizApp from "./assets/quiz-app.webp";
import css from "./assets/css.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import firebase from "./assets/firebase.png";
import jest from "./assets/jest.png";
import webpack from "./assets/webpack.png";
import nodejs from "./assets/nodejs.png";
import express from "./assets/express.png";
import mongodb from "./assets/mongodb.png";

const projectsData = [
  {
    id: 1,
    title: "Karoz",
    description:
      "A mobile responsive Kanban board app for managing your projects. Built with React, ContextAPI for state management, and Firebase.",
    image: karozImg,
    ghLink: "https://github.com/oalva-rez/karoz/tree/firebase",
    siteLink: "https://karoz-3c7bb.web.app/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: react, name: "react" },
      { image: firebase, name: "firebase" },
    ],
  },
  {
    id: 2,
    title: "Shopping Cart",
    description:
      "Mock store website built with React. Implements TDD practices using Jest and React Testing Library. Uses React Router v6 for routing and URL params for product ID.",
    image: sensuro,
    ghLink: "https://github.com/oalva-rez/shopping-cart",
    siteLink: "https://shopping-cart123.web.app",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: react, name: "react" },
      { image: jest, name: "jest" },
    ],
  },
  {
    id: 3,
    title: "Restaurant Page",
    description:
      "Final project for Creating User-centered Content class. Built with vanilla JavaScript and webpack for bundling. Simulated a client proposal for a mobile responsive restaurant page.",
    image: restaurantPage,
    ghLink: "https://github.com/oalva-rez/restaurant-page",
    siteLink: "https://oalva-rez.github.io/restaurant-page/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: js, name: "javascript" },
      { image: webpack, name: "webpack" },
    ],
  },
  {
    id: 4,
    title: "Lazy Reader",
    description:
      "A website that generates a summarized version of the top posts from Reddit. Built with React for the front-end, utilizing a restful API built with Node.js and Express with a MongoDB database.",
    image: lazyReader,
    ghLink: "https://github.com/oalva-rez/LazyReader-Frontend",
    siteLink: "https://lazyreader456.web.app/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: react, name: "react" },
      { image: nodejs, name: "nodejs" },
      { image: express, name: "express" },
      { image: mongodb, name: "mongodb" },
    ],
  },
  {
    id: 5,
    title: "CV Generator",
    description:
      "A simple CV generator built with React. Users can add their information and download a PDF version of their CV.",
    image: cvGenerator,
    ghLink: "https://github.com/oalva-rez/cv-generator",
    siteLink: "https://oalva-rez.github.io/cv-generator/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: react, name: "react" },
    ],
  },
  {
    id: 6,
    title: "Premy",
    description:
      "A Wordle-like guessing game for the English Premier League. Built with vanilla JavaScript and webpack for bundling. Async/await syntax, and fetch for calling the Football Data API.",
    image: premy,
    ghLink: "https://github.com/oalva-rez/premy",
    siteLink: "https://oalva-rez.github.io/premy/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: js, name: "javascript" },
      { image: webpack, name: "webpack" },
    ],
  },
  {
    id: 7,
    title: "Quiz App",
    description:
      "A quiz app built with React. The app uses the Open Trivia Database API.",
    image: quizApp,
    ghLink: "https://github.com/oalva-rez/quiz-app",
    siteLink: "https://oalva-rez.github.io/quiz-app/",
    tech: [
      { image: html, name: "html" },
      { image: css, name: "css" },
      { image: react, name: "react" },
    ],
  },
];

export default projectsData;
