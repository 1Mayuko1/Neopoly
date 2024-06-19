import React, { useState } from "react";
import styles from "./PlayingDice.module.css";

const PlayingDice: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeNumber, setActiveNumber] = useState<number>(1);

  const rollDice = () => {
    if (isActive) return;

    setIsActive(true);
    const random = Math.floor(Math.random() * 6) + 1;
    let rotateX = 0, rotateY = 0;

    switch (random) {
      case 1: rotateX = 0; rotateY = 0; break;
      case 6: rotateX = 180; rotateY = 0; break;
      case 2: rotateX = -90; rotateY = 0; break;
      case 5: rotateX = 90; rotateY = 0; break;
      case 3: rotateX = 0; rotateY = 90; break;
      case 4: rotateX = 0; rotateY = -90; break;
    }

    const diceElement = document.querySelector(`.${styles.dice}`) as HTMLElement | null;
    if (diceElement !== null) {
      diceElement.style.setProperty('--rotateX', `${rotateX}deg`);
      diceElement.style.setProperty('--rotateY', `${rotateY}deg`);
    } else {
      console.error('Element not found');
    }

    setTimeout(() => {
      setIsActive(false);
      setActiveNumber(random)
    }, 2000);
  };

  console.log('testas', activeNumber)

  return (
    <div className={styles.diceContainer} onClick={rollDice}>
      <div className={`${styles.dice} ${isActive ? styles.diceRolling : ''}`}>
        <div className={`${styles.face} ${styles.front}`}></div>
        <div className={`${styles.face} ${styles.back}`}></div>
        <div className={`${styles.face} ${styles.top}`}></div>
        <div className={`${styles.face} ${styles.bottom}`}></div>
        <div className={`${styles.face} ${styles.right}`}></div>
        <div className={`${styles.face} ${styles.left}`}></div>
      </div>
    </div>
  );
};

export default PlayingDice;
