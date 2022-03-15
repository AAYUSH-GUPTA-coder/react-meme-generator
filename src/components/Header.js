import React from "react";
import memeImage from "./images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={memeImage} className="header--image" alt="meme" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}
