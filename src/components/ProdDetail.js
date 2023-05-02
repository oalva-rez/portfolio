import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../AphexLibrary";
import ReactAudioPlayer from "react-audio-player";

function ProdDetail({ addToCart }) {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getSingleProduct(id);
      setProd(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <section className="prod-container">
      <div className="prod-breadcrumbs">
        <a href="/">Home</a> / <a href="/audio">Audio</a> / {prod?.title}
      </div>
      <div className="product-detail">
        <img src={prod?.image} alt={prod?.title} />
        <div className="prod-content">
          <h2>{prod?.title}</h2>
          <h3>{prod?.artist}</h3>
          <p>
            <span className="bold">Genre:</span> {prod?.genre}
          </p>
          <p>
            <span className="bold">BPM:</span> {prod?.bpm}
          </p>
          <p>
            <span className="bold">Key:</span> {prod?.key}
          </p>
          <ReactAudioPlayer src={prod?.audio} controls />

          <div className="prices-container">
            {prod?.salePrice ? (
              <>
                <p className="prod original-price">${prod?.price}</p>
                <p className="prod-price">${prod?.salePrice}</p>
              </>
            ) : (
              <p className="prod-price">${prod?.price}</p>
            )}
          </div>

          <div className="prod-btn-container">
            <button className="prod-button">Buy Now</button>
            <button
              className="ac-button"
              onClick={() => {
                addToCart(prod?._id);
              }}
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProdDetail;
