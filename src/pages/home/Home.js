import React from "react";
import ozkar from "../../assets/ozkar.webp";
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
          Self taught Frontend Developer, passionate about learning new things
          and sharing my knowledge with others. I love to create things that
          live on the internet, whether that be websites, applications, or
          anything in between. My goal is to always build products that provide
          pixel-perfect, performant experiences.
        </p>
        <div className="home--buttons">
          <button onClick={() => navigate("/about")}>About me</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
        </div>
      </section>
      <div className="home--image">
        <img src={ozkar} alt="ozkar" className="ozkar-headshot" />
      </div>
    </main>
  );
}
