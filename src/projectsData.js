import karozImg from "./assets/karoz-img.png";
import sensuro from "./assets/sensuro.png";
import restaurantPage from "./assets/restaurant-page.png";
import cvGenerator from "./assets/cv-generator.png";
import premy from "./assets/premy.png";
import quizApp from "./assets/quiz-app.png";
import css from "./assets/css.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import firebase from "./assets/firebase.png";
import jest from "./assets/jest.png";
import webpack from "./assets/webpack.png";

const projectsData = [
  {
    id: 1,
    title: "Karoz",
    description:
      "A mobile responsive Kanban board app for managing your projects. Built with React, ContextAPI for state management, and Firebase.",
    image: karozImg,
    ghLink: "https://github.com/oalva-rez/karoz",
    siteLink: "https://karoz-3c7bb.web.app/",
    tech: [html, css, react, firebase],
  },
  {
    id: 2,
    title: "Shopping Cart",
    description:
      "Shopping cart website built with React. Implemented TDD practices using Jest and React Testing Library. Uses React Router v6 for routing and URL params for product ID.",
    image: sensuro,
    ghLink: "https://github.com/oalva-rez/shopping-cart",
    siteLink: "#",
    tech: [html, css, react, jest],
  },
  {
    id: 3,
    title: "Restaurant Page",
    description:
      "Final project for WEBD127 Creating User-centered Content. Built with vanilla JavaScript and webpack for bundling. Simulated a client proposal for a mobile responsive restaurant page.",
    image: restaurantPage,
    ghLink: "https://github.com/oalva-rez/restaurant-page",
    siteLink: "https://oalva-rez.github.io/restaurant-page/",
    tech: [html, css, js, webpack],
  },
  {
    id: 4,
    title: "CV Generator",
    description:
      "A simple CV generator built with React. Users can add their information and download a PDF version of their CV.",
    image: cvGenerator,
    ghLink: "https://github.com/oalva-rez/cv-generator",
    siteLink: "https://oalva-rez.github.io/cv-generator/",
    tech: [html, css, react],
  },
  {
    id: 5,
    title: "Premy",
    description:
      "A Wordle-like guessing game for the English Premier League. Built with vanilla JavaScript and webpack for bundling. Async/await syntax, and fetch for calling the Football Data API.",
    image: premy,
    ghLink: "https://github.com/oalva-rez/premy",
    siteLink: "https://oalva-rez.github.io/premy/",
    tech: [html, css, js, webpack],
  },
  {
    id: 6,
    title: "Quiz App",
    description:
      "A quiz app built with React. The app uses the Open Trivia Database API.",
    image: quizApp,
    ghLink: "https://github.com/oalva-rez/quiz-app",
    siteLink: "https://oalva-rez.github.io/quiz-app/",
    tech: [html, css, react],
  },
];

export default projectsData;
