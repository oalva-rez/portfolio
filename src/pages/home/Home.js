import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { getSaleProducts } from "../../AphexLibrary";

import AudioCard from "../../components/AudioCard";
import audioGuy from "../../assets/audio-guy.jpg";
import aff1 from "../../assets/aff1.png";
import aff2 from "../../assets/aff2.png";
import aff3 from "../../assets/aff3.png";
import aff4 from "../../assets/aff4.svg";
import aff5 from "../../assets/aff5.svg";
import aff6 from "../../assets/aff6.svg";

export default function Home({ addToCart }) {
  const audioData = [
    {
      _id: 1,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Solid Wall of Sound",
      artist: "Aphex Twin",
      originalPrice: "$25",
      salePrice: "$9",
      image: "https://picsum.photos/55/55",
      genre: "Hip Hop",
      bpm: "130",
      key: "D# Minor",
      createdAt: "2021-05-01T00:00:00.000Z",
    },
    {
      _id: 2,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Wild Things",
      artist: "Aphex Twin",
      originalPrice: "$45",
      salePrice: "$18",
      image: "https://picsum.photos/55/55",
      genre: "R&B",
      bpm: "120",
      key: "E Major",
      createdAt: "2021-05-01T00:00:00.000Z",
    },
    {
      _id: 3,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "The World Is Yours",
      artist: "Aphex Twin",
      originalPrice: "$37",
      salePrice: "$17",
      image: "https://picsum.photos/55/55",
      genre: "Hip Hop",
      bpm: "145",
      key: "A Minor",
      createdAt: "2021-05-01T00:00:00.000Z",
    },
  ];
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    try {
      const fetchSaleProducts = async () => {
        const data = await getSaleProducts();
        setSaleItems(data);
      };
      fetchSaleProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="home--container">
      <Helmet>
        <title>Aphex Twin Beat Store</title>
        <meta name="description" content="" />
      </Helmet>
      <section>
        <div className="home--decal">Mix Master Record</div>
        <h1 className="home--heading">
          <span className="gradient">
            ENGINEER AND <br></br>PRODUCER
          </span>{" "}
          BASED<br></br> IN SAN DIEGO
        </h1>
        <p className="home--text">
          Discover Masterful Beats from a San Diego-Based Music Producer and
          Engineer. Whether you're a seasoned artist or just starting out, our
          beats are the perfect foundation for your next hit. Elevate Your Sound
          Today.
        </p>
        <div className="home--buttons">
          <button>BEAT STORE</button>
          <button>LICENSING</button>
        </div>
      </section>
      <section className="home--sale">
        <h2 className="sale-heading">Beats Under $20</h2>
        <div className="sale-content">
          <div className="sale-text">
            <h3>Don't let high prices cut your dreams short.</h3>
            <button>Browse sale</button>
          </div>
          <div className="sale-items">
            {saleItems.map((data, index) => (
              <AudioCard
                _id={data.mp3Id._id}
                audio={data.mp3Id.audio}
                title={data.mp3Id.title}
                artist={data.mp3Id.artist}
                originalPrice={data.mp3Id.price}
                salePrice={data.salePrice}
                image={data.mp3Id.image}
                genre={data.mp3Id.genre}
                bpm={data.mp3Id.bpm}
                songKey={data.mp3Id.key}
                key={index + data.mp3Id.title}
                slug={data.mp3Id.slug}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-image">
          <img src={audioGuy} alt="" />
          <div className="image-outline"></div>
        </div>
        <div className="about-text">
          <h4>From the first to last step</h4>
          <p>
            Aphex Twin is the only producer of their kind that offers you
            everything you need to launch, refine and present your creative
            product from the first to the last step.
          </p>
        </div>
      </section>
      <section className="affiliates">
        <img src={aff1} alt="" />
        <img src={aff2} alt="" />
        <img src={aff3} alt="" />
        <img src={aff4} alt="" />
        <img src={aff5} alt="" />
        <img src={aff6} alt="" />
      </section>
    </main>
  );
}
