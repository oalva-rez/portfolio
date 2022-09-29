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
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, porro.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad
          soluta labore necessitatibus, eaque hic voluptate sit natus! Tenetur
          in facere incidunt? Dolorem delectus, quaerat animi eum voluptas enim
          architecto eaque ullam quibusdam iusto iure debitis quas reiciendis
          ipsum? Expedita aliquam reiciendis sunt repellendus iste minus
          doloremque, eaque error veniam in illum suscipit repellat, quibusdam
          iure accusantium mollitia nemo sed obcaecati enim consequatur! Quae
          dignissimos provident earum labore porro minima dolore odit iure
          pariatur eaque?
        </p>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias
          minima tempore nesciunt qui odio inventore. Modi consectetur ut
          nostrum, a consequuntur sunt repudiandae, iure libero quo dolorem est
          laudantium explicabo porro consequatur dolor excepturi ipsa, quas
          harum. Doloribus velit dolores facilis enim rerum corporis alias,
          totam at doloremque autem incidunt, dolorum repudiandae nostrum, quam
          saepe quis culpa aliquam nihil amet ut cum aperiam quidem? Molestias
          facere eaque ad voluptatem ipsum cumque corrupti, rem illo
          consectetur! Libero ea mollitia repudiandae nisi! Omnis ratione eos
          deserunt sint tempore fugiat adipisci maiores soluta exercitationem
          quos numquam dolorem vitae totam velit repudiandae mollitia, excepturi
          aspernatur explicabo earum ipsa, dolores illum, harum accusantium?
          Accusantium officia exercitationem ipsum vitae porro repellat velit
          repellendus ducimus aut!
        </p>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quod
          ipsam optio perspiciatis, maxime dicta. Nisi culpa autem id
          exercitationem quo optio voluptate in laboriosam qui dolore, nesciunt
          iusto enim sequi ipsum. Vitae odio hic quos sequi quas, architecto
          veniam!
        </p>
      </div>
    </main>
  );
}
