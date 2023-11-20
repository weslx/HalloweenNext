// Game.tsx
import React, { useState } from "react";
import Roulette from "./roulette";
import styles from "./Game.module.css";

const Game: React.FC = () => {
  const [spin, setSpin] = useState(0);

  const handleClick = () => {
    const newSpin = Math.floor(Math.random() * 360);
    setSpin(newSpin);
  };

  return (
    <div className={styles.game}>
      <Roulette spin={spin} onClick={handleClick}>
        {spin % 2 === 0 ? "🍬" : "👻"}
      </Roulette>
    </div>
  );
};

export default Game;
