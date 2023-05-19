import React, { useState } from "react";
import "./App.css";

function Cards() {
  const [card1Style, setCard1Style] = useState({});
  const [card2Style, setCard2Style] = useState({});
  const [card3Style, setCard3Style] = useState({});
  const [card2Height, setCard2Height] = useState("100%");

  const handleButtonClick = () => {
    setCard1Style(card2Style);
    setCard2Style(card3Style);
    setCard3Style({ transform: "scale(0.8)", opacity: "0" });
    setCard2Height("80%");

  };

  return (
    <div className="container">
      <div className="cards">
        <div className="card" style={card1Style}>
          <h2>Card 1</h2>
          <p>This is the first card.</p>
        </div>
        <div className= {`card ${card2Height === "80%" ? "reduced-height" : ""}`} style={{ ...card2Style, height: card2Height }} >
          <h2>Card 2</h2>
          <p>This is the second card.</p>
        </div>
        <div className="card" style={card3Style}>
          <h2>Card 3</h2>
          <p>This is the third card.</p>
        </div>
      </div>
      <button onClick={handleButtonClick}>Animate</button>
    </div>
  );
}

export default Cards;
