import React from 'react';
import styles from './cards-list-bottom.module.css'
import {
  faIndustry,
  faPlane,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import GameBoardCornerCard from '@/src/components/game-board-corner-card/game-board-corner-card';
import GameBoardSmallCard from '@/src/components/game-board-small-card/game-board-small-card';

const CardsListBottom = () => {
  return (
    <div className={styles.cardsListBottomWrapper}>
      <div className={styles.cardsListBottomContainer}>
        <GameBoardCornerCard
          specialization={'go to prison'}
          title={'Go to prison'}
        />
        <GameBoardSmallCard
          groupTitle={'France'}
          price={'280$'}
          title={'Paris'}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'Company'}
          price={'150$'}
          title={'Watter Company'}
          iconItem={faIndustry}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'France'}
          price={'260$'}
          title={'Toulouse'}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'France'}
          price={'260$'}
          title={'Lyon'}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'Airport'}
          price={'200$'}
          title={'CDG Airport'}
          iconItem={faPlane}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'China'}
          price={'240$'}
          title={'Shanghai'}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'China'}
          price={'220$'}
          title={'Beijing'}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'Surprise'}
          title={'Surprise'}
          iconItem={faWandMagicSparkles}
          position={'bottom'}
        />
        <GameBoardSmallCard
          groupTitle={'China'}
          price={'220$'}
          title={'Shenzhen'}
          position={'bottom'}
        />
        <GameBoardCornerCard
          specialization={'vocation'}
          title={'Vocation'}
        />
      </div>
    </div>
  );
};

export default CardsListBottom;
