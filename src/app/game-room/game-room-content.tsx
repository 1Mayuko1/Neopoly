'use client';
import React, { useEffect, useRef } from 'react';
import styles from './game-room.module.css';
import CardsListTop from '@/src/components/cards-list/cards-list-top/cards-list-top';
import CardsListLeft from '@/src/components/cards-list/cards-list-left/cards-list-left';
import CardsListRight from '@/src/components/cards-list/cards-list-right/cards-list-right';
import CardsListBottom from '@/src/components/cards-list/cards-list-bottom/cards-list-bottom';

const GameRoomContent: React.FC = () => {
  const gameDeckInnerRef = useRef<HTMLDivElement>(null);
  const gameDeckWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const gameDeckInner = gameDeckInnerRef.current;
      const gameDeckWrapper = gameDeckWrapperRef.current;
      if (gameDeckInner && gameDeckWrapper) {
        const widthScale = (window.innerWidth * 0.7 - 40) / 1000;
        const heightScale = (window.innerHeight * 0.9 - 40) / 1000;
        const scale = Math.min(widthScale, heightScale);
        gameDeckInner.style.transform = `translate(-50%, -50%) scale(${scale})`;

        const gameDeckWidth = gameDeckInner.clientWidth * scale;
        gameDeckWrapper.style.width = `${gameDeckWidth + 10}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.gameRoomContentWrapper}>
      <div className={styles.gameRoomSettingsWrapper}>
        Hello gameRoom Settings
      </div>

      <div className={styles.gameDeckWrapper} ref={gameDeckWrapperRef}>
        <div className={styles.gameDeckInner} ref={gameDeckInnerRef}>
          <div className={styles.cardsListTopWrapper}>
            <CardsListTop />
          </div>

          <div className={styles.cardsListLeftAndRightWrapper}>
            <div className={styles.cardsListLeftWrapper}>
              <CardsListLeft />
            </div>

            <div className={styles.gameDeckActionsContainer}>
              Hello gameDeck Actions Container
            </div>

            <div className={styles.cardsListRightWrapper}>
              <CardsListRight />
            </div>
          </div>

          <div className={styles.cardsListBottomWrapper}>
            <CardsListBottom />
          </div>
        </div>
      </div>

      <div className={styles.gameRoomChatWrapper}>
        Hello gameRoom Chat Wrapper
      </div>
    </div>
  );
};

export default GameRoomContent;
