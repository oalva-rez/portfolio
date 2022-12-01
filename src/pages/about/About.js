import React from "react";
import aboutAvatar from "../../assets/about-avatar.webp";

export default function About() {
  return (
    <main className="about--container">
      <div className="about--heading">
        <img src={aboutAvatar} alt="avatar on desk" className="about--avatar" />
        <h1>
          I'm Ozkar Alvarez. <br />A{" "}
          <span className="frontend-text">frontend</span> react developer.{" "}
          <br />
          Turning ideas into real life{" "}
          <span className="products-text">products</span> is my passion.
        </h1>
      </div>
      <div className="about--main-text">
        <h2>It all started with Python</h2>
        <p>
          Interested in many things, I started learning Python in 2021. I dove
          deeper into the software development rabbit hole and came out with a
          fascination for coding. After two months of writing python code, I
          decided to chose a pathway which was most aligned with my interests.{" "}
          <i>Building things.</i> I started learning HTML, CSS, and Javascript.
          Built several projects with vanilla Javascript before jumping into any
          frameworks. This allowed me to really solidify my understanding of the
          fundamentals of Javascript. I then started learning React and have
          been building projects with it ever since.
        </p>
        <h2>Academics</h2>
        <p>
          Learning has been a passion of mine since I was a kid. After high
          school, I decided to pursue a degree in Structural Engineering. I
          attended San Diego Mesa Community College, where I took high level
          math and physics courses to prepare me for the rigorous engineering
          curriculum. My interests in engineering were heavy, however I soon
          realized that I was much more interested in the software side of
          things. I decided to switch my major to Web Development and have been
          learning ever since.
        </p>
        <p>
          Mesa College Web Development Program has allowed me to expand my
          knowledge by exposing me to many different technologies. I have
          learned how to build full stack applications using, Express, Node.js,
          PHP with databases such as MySQL, MongoDB and firebase. React,
          Angular, and Vue were also covered in the program. I was also exposed
          to UX practices along with simulating client proposals. I am expected
          to graduate by June 2023.
        </p>
        <h2>Technologies i've been working with lately</h2>
        <ul>
          <li>Javascript (ES6+)</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Node.js / Express</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </div>
    </main>
  );
}
