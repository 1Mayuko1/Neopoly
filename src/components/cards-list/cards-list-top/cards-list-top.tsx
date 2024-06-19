import React from 'react';
import styles from './cards-list-top.module.css'
import {
  faCoins,
  faMoneyBillTransfer,
  faPlane,
  faQuestion,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import GameBoardCornerCard from '@/src/components/game-board-corner-card/game-board-corner-card';
import GameBoardSmallCard from '@/src/components/game-board-small-card/game-board-small-card';

const CardsListTop = () => {
  return (
    <div className={styles.cardsListTopWrapper}>
      <div className={styles.cardsListTopContainer}>
        <GameBoardCornerCard
          specialization={'start'}
          title={'Start'}
        />
        <GameBoardSmallCard
          groupTitle={'Brazil'}
          price={'60$'}
          title={'Salvador'}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Treasure'}
          title={'Treasure'}
          iconItem={faCoins}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Brazil'}
          price={'60$'}
          title={'Rio'}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Tax'}
          title={'Income Tax'}
          iconItem={faMoneyBillTransfer}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Airport'}
          price={'200$'}
          title={'TLV Airport'}
          iconItem={faPlane}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Israel'}
          price={'100$'}
          title={'Tel Aviv'}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Surprise'}
          title={'Surprise'}
          iconItem={faWandMagicSparkles}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Israel'}
          price={'100$'}
          title={'Haifa'}
          position={'top'}
        />
        <GameBoardSmallCard
          groupTitle={'Israel'}
          price={'120$'}
          title={'Jerusalem'}
          position={'top'}
        />
        <GameBoardCornerCard
          specialization={'prison'}
          title={'In prison'}
        />
      </div>
    </div>
  );
};

export default CardsListTop;
