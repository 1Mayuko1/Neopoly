import React, { FC } from 'react';
import styles from './game-board-corner-card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesRight,
  faBed,
  faPlaneDeparture,
  faSkullCrossbones,
  faXmarksLines
} from '@fortawesome/free-solid-svg-icons';

interface CornerCardProps {
  specialization: string,
  title: null | string,
  icon?: null | string,
  img?: null | any,
}

const GameBoardCornerCard: FC<CornerCardProps> = (
  {
    specialization,
    icon,
    img,
    title
  }) => {

  switch (specialization) {
    case 'start':
      return (
        <div className={styles.cornerCardWrapper}>
          <div className={styles.cornerCardIconBlock}>
            <FontAwesomeIcon
              className={styles.cornerCardIcon}
              icon={faBed}
            />
          </div>
          <div className={styles.cornerCardTitle}>{title}</div>
        </div>
      )
    case 'go to prison':
      return (
        <div className={styles.cornerCardWrapper}>
          <div className={styles.cornerCardIconBlock}>
            <FontAwesomeIcon
              className={styles.cornerCardIcon}
              icon={faSkullCrossbones}
            />
          </div>
          <div className={styles.cornerCardTitle}>{title}</div>
        </div>
      );
    case 'prison':
      return (
        <div className={styles.cornerCardWrapper}>
          <div className={styles.cornerCardIconBlock}>
            <FontAwesomeIcon
              className={styles.cornerCardIcon}
              icon={faXmarksLines}
            />
          </div>
          <div className={styles.cornerCardTitle}>{title}</div>
        </div>
      );
    case 'vocation':
      return (
        <div className={styles.cornerCardWrapper}>
          <div className={styles.cornerCardIconBlock}>
            <FontAwesomeIcon
              className={styles.cornerCardIcon}
              icon={faPlaneDeparture}
            />
          </div>
          <div className={styles.cornerCardTitle}>{title}</div>
        </div>
      );
    default:
      return (
        <div className={styles.cornerCardWrapper}>
          <div className={styles.cornerCardIconBlock}>
            <FontAwesomeIcon
              className={styles.cornerCardIcon}
              icon={faPlaneDeparture}
            />
          </div>
          <div className={styles.cornerCardTitle}>{title}</div>
        </div>
      )
  }
};

export default GameBoardCornerCard;
