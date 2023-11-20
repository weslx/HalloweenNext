// Roulette.tsx
import React, { ReactNode } from "react";
import styles from "./Roulette.module.css";

interface RouletteProps {
  spin: number;
  onClick: () => void;
  children: ReactNode;
}

const Roulette: React.FC<RouletteProps> = ({ spin, onClick, children }) => (
  <div
    className={styles.roulette}
    style={{ transform: `rotate(${spin}deg)` }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Roulette;
