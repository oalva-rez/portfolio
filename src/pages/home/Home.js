import React from "react";
import ozkar from "../../assets/ozkar.webp";
import react from "../../assets/reactjsBG.png";
import nodejs from "../../assets/nodejsBG.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import ts from "../../assets/typescript.png";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="home--container">
      <section className="home--text">
        <h1>
          Hey there 👋
          <br />I am
          <span> Ozkar&nbsp;Alvarez</span>
        </h1>
        <p>
          Self taught Fullstack Developer, passionate about learning new things
          and sharing my knowledge with others. I love to create things that
          live on the internet, whether that be websites, applications, or
          anything in between. My goal is to always build products that provide
          pixel-perfect, performant experiences.
        </p>

        <div className="home--buttons">
          <button onClick={() => navigate("/about")}>About me</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
        </div>
        <hr />
        <h2 className="home--tech-heading">Ozkar's Stack</h2>

        <ul className="home--tech">
          <li>
            <img src={ts} alt="typescript" title="Typescript" />
          </li>
          <li>
            <img src={react} alt="react" title="React" />
          </li>
          <li>
            <img src={nodejs} alt="nodejs" title="NodeJS" />
          </li>
          <li>
            <img src={express} alt="express" title="Express" />
          </li>
          <li>
            <img src={mongodb} alt="mongodb" title="MongoDB" />
          </li>
          <li>
            <img src={mysql} alt="mysql" title="MySQL" />
          </li>
        </ul>
      </section>
      <div className="home--image">
        <img src={ozkar} alt="ozkar" className="ozkar-headshot" />
      </div>
    </main>
  );
}
