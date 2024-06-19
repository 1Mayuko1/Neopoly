import React, { FC } from 'react';
import styles from './game-board-small-card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface SmallCardProps {
  groupTitle?: string,
  price?: null | string,
  title?: string,
  position?: 'top' | 'right' | 'bottom' | 'left',
  iconItem?: IconDefinition,
  img?: any,
}

const GameBoardSmallCard: FC<SmallCardProps> = (
  {
    groupTitle,
    price,
    title,
    position = 'top',
    iconItem,
    img,
  }
  ) => {

  const containerClass = styles[`${position}SmallCardWrapper`] || styles.smallCardWrapper;
  const priceContainer = styles[`${position}SmallCardPriceBlock`]
  const priceValue = styles[`${position}SmallCardPriceValue`]
  const groupImageIconClass = styles[`${position}GroupImageIconWrapper`]
  const iconBlockContainer = styles[`${position}SmallCardEventIconContainer`]
  const smallCardEventIcon = styles[`${position}SmallCardEventIcon`]
  const smallCardTitleValue = styles[`${position}SmallCardTitleValueContainer`]
  const titleValue = styles[`${position}SmallCardTitleValue`]
  const titleAndIconContainer = `${groupTitle === 'Airport' || groupTitle === 'Company' ? styles[`${position}TitleAndIconContainerAirport`] : ''} ${styles[`${position}TitleAndIconContainer`]}`

  const priceBlock = price && (
    <div className={priceContainer}>
      <div className={priceValue}>{price}</div>
    </div>
  );

  const iconBlock = iconItem && (
    <div className={iconBlockContainer}>
      <FontAwesomeIcon className={smallCardEventIcon} icon={iconItem} />
    </div>
  );

  const titleBlock = (
    <div className={smallCardTitleValue}>
      <div className={titleValue}>{title}</div>
    </div>
  );

  return (
    <div title={title} className={containerClass}>
      {priceBlock}
      <div className={titleAndIconContainer}>
        {titleBlock}
        {(groupTitle === 'Airport' || groupTitle === 'Company') && iconBlock}
      </div>
      {price && groupTitle !== 'Airport' && groupTitle !== 'Company' && (
        <div className={groupImageIconClass}></div>
      )}
      {!price && iconItem && iconBlock}
    </div>
  );
}

export default GameBoardSmallCard;
