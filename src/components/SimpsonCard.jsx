import React from "react";
import "./SimpsonCard.css";

const SimpsonCard = ({ quote, character, image }) => (
  <figure className="SimpsonCard">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default SimpsonCard;
