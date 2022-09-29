import React from "react";
import homeAvatar from "../../assets/home-avatar.webp";
import arm from "../../assets/arm.webp";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="home--container">
      <div className="home--text">
        <h1>
          Hey there 👋
          <br />I am
          <span> Ozkar&nbsp;Alvarez</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          eveniet nihil quod. Ab tempore consequatur veritatis aliquam
          laboriosam unde voluptatibus aliquid sed obcaecati, iusto ipsum eum
          sunt recusandae vitae repellendus dolore!
        </p>
        <div className="home--buttons">
          <button onClick={() => navigate("/about")}>About me</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
        </div>
      </div>
      <img src={homeAvatar} alt="avatar" className="home--avatar" />
      <img src={arm} alt="arm" className="home--arm" />
    </main>
  );
}
