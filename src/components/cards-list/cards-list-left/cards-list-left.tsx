import React from 'react';
import styles from './cards-list-left.module.css'
import {
  faCoins,
  faMoneyBill1Wave,
  faPlane,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import GameBoardSmallCard from '@/src/components/game-board-small-card/game-board-small-card';

const CardsListLeft = () => {
  return (
    <div className={styles.cardsListLeftWrapper}>
      <div className={styles.cardsListLeftContainer}>
        <GameBoardSmallCard
          groupTitle={'USA'}
          price={'400$'}
          title={'New York'}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'Tax'}
          title={'Luxury Tax'}
          iconItem={faMoneyBill1Wave}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'USA'}
          price={'350$'}
          title={'San Francisco'}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'Surprise'}
          title={'Surprise'}
          iconItem={faWandMagicSparkles}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'Airport'}
          price={'200$'}
          title={'JFK Airport'}
          iconItem={faPlane}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'United Kingdom'}
          price={'320$'}
          title={'London'}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'Treasure'}
          title={'Treasure'}
          iconItem={faCoins}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'United Kingdom'}
          price={'300$'}
          title={'Man-chester'}
          position={'left'}
        />
        <GameBoardSmallCard
          groupTitle={'United Kingdom'}
          price={'300$'}
          title={'Liver-pool'}
          position={'left'}
        />
      </div>
    </div>
  );
};

export default CardsListLeft;
