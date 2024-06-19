'use client';

import React, { FC, useState } from 'react';
import styles from './Welcome.module.css'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import PlayingDice from '@/src/components/playing-dice/PlayingDice';

const Welcome: FC = () => {
  const [nickNameInput, setNickNameInput] = useState<string>('');
  const { push } = useRouter()

  const goToGameRoom = () => {
    push('/game-room');
  };

  const handleChangeNickValue = (value: string) => {
    setNickNameInput(value);
  };

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.mainPreviewContainerWrapper}>
        <div
          className={`${styles.bgGradientDot} ${styles.mainContainerGradientDotA}`}
        ></div>
        <div
          className={`${styles.bgGradientDot} ${styles.mainContainerGradientDotB}`}
        ></div>
        <div
          className={`${styles.bgGradientDot} ${styles.mainContainerGradientDotC}`}
        ></div>
        <div
          className={`${styles.bgGradientDot} ${styles.mainContainerGradientDotD}`}
        ></div>
        <div
          className={`${styles.bgGradientDot} ${styles.mainContainerGradientDotE}`}
        ></div>
        <div
          className={`${styles.bgGradientDot} ${styles.mainContainerGradientDotF}`}
        ></div>
        <div
          className={`${styles.bgGradientDot} ${styles.mainContainerGradientDotG}`}
        ></div>

        <div className={styles.mainHomeContainerWrapper}>
          <div className={styles.mainHomeContainer}>
            <div className={styles.playingDiceContainer}>
              <PlayingDice />
            </div>

            <div className={styles.greetContainer}>
              <div className={styles.greetTextBlock}>
                <p className={styles.greetTextTitle}>NeoPoly.io</p>
                <p className={styles.greetText}>Reinvention of the classics</p>
              </div>
            </div>

            <div className={styles.roomCreationContainerWrapper}>
              <div className={styles.roomCreationContainer}>
                <div className={styles.inputNameWrapper}>
                  <div className={styles.inputNameContainer}>
                    <input
                      placeholder={'Your nickname'}
                      value={nickNameInput}
                      className={styles.nickNameInput}
                      onChange={(val) =>
                        handleChangeNickValue(val.target.value)
                      }
                    />
                  </div>
                </div>

                <div
                  className={styles.goPlayButtonWrapper}
                  onClick={() => goToGameRoom()}
                >
                  <div className={styles.goPlayButtonContainer}>
                    <div className={styles.goPlayButtonText}>Go ahead</div>
                    <div className={styles.goPlayButtonIconBlock}>
                      <FontAwesomeIcon
                        className={styles.goPlayButtonIcon}
                        icon={faAnglesRight}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className={styles.otherInfoWrapper}>*/}

      {/*</div>*/}
    </div>
  );
};

export default Welcome;
