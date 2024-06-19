import React from 'react';
import styles from './cards-list-right.module.css'
import { faCoins, faIndustry, faMoneyBill1Wave, faPlane, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import GameBoardSmallCard from '@/src/components/game-board-small-card/game-board-small-card';

const CardsListRight = () => {
  return (
    <div className={styles.cardsListRightWrapper}>
      <div className={styles.cardsListRightContainer}>
        <GameBoardSmallCard
          groupTitle={'Italy'}
          price={'140$'}
          title={'Venice'}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'Company'}
          price={'150$'}
          title={'Electric Company'}
          iconItem={faIndustry}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'Italy'}
          price={'140$'}
          title={'Milan'}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'Italy'}
          price={'160$'}
          title={'Rome'}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'Airport'}
          price={'200$'}
          title={'MUC Airport'}
          iconItem={faPlane}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'German'}
          price={'180$'}
          title={'Frankfurt'}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'Treasure'}
          title={'Treasure'}
          iconItem={faCoins}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'German'}
          price={'180$'}
          title={'Munich'}
          position={'right'}
        />
        <GameBoardSmallCard
          groupTitle={'German'}
          price={'200$'}
          title={'Berlin'}
          position={'right'}
        />
      </div>
    </div>
  );
};

export default CardsListRight;
