import React from "react";
import ReactAudioPlayer from "react-audio-player";

function AudioCard({
  _id,
  audio,
  title,
  artist,
  originalPrice,
  salePrice,
  image,
  genre,
  bpm,
  songKey,
  slug,
  addToCart,
}) {
  return (
    <div className="audio-card">
      <div className="ac-1st">
        <img src={image} alt="" />
        <div>
          <ReactAudioPlayer
            src={audio}
            autoPlay={false}
            controls
            className="audio-player"
          />
          <div className="ac-info">
            BPM: <b>{bpm}</b> | Key: <b>{songKey}</b>
          </div>
        </div>
      </div>
      <div className="ac-2nd">
        <a href={`/audio/${slug}`} className="ac-title">
          {title}
        </a>
        <p>
          By {artist} in <u>{genre}</u>
        </p>
      </div>
      <div className="ac-3rd">
        <div>
          <span className="original-price">${originalPrice}</span>{" "}
          <span className="sale-price">${salePrice}</span>
        </div>
        <div>
          <button
            className="ac-button"
            onClick={() => {
              addToCart(_id);
            }}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AudioCard;
