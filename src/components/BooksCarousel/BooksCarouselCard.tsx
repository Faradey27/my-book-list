import React from 'react';

import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import BookCard from '../BookCard';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    height: 320,
    transform: 'scale(0.6) translateY(-2rem)',
    cursor: 'pointer',
    pointerEvents: 'none',
    background: 'linear-gradient(to top, #2e5266, #6e8898)',
    transition: 'transform 0.8s',
    zIndex: 1,
    flexShrink: 0,
  },
  default: {
    opacity: 0,
  },
  active: {
    transform: 'scale(1) translateY(0) translateX(0)',
    pointerEvents: 'auto',
    opacity: 1,
    zIndex: 3,
  },
  prev: {
    zIndex: 2,
    transform: 'scale(0.8) translateY(-1rem) translateX(0)',
    opacity: 0.6,
    pointerEvents: 'auto',
  },
  next: {
    zIndex: 2,
    transform: 'scale(0.8) translateY(-1rem) translateX(0)',
    opacity: 0.6,
    pointerEvents: 'auto',
  },
}));

export enum CardType {
  prev = 'prev',
  next = 'next',
  active = 'active',
  default = 'default',
}

interface IBooksCarousel {
  book: any;
  type: CardType;
  index: number;
  width: number;
  onClick: (index: number) => void;
}

const BooksCarousel = ({
  book,
  width,
  type,
  index,
  onClick,
}: IBooksCarousel) => {
  const classes = useStyles();
  const handleCardClick = () => onClick(index);

  return (
    <div
      className={classNames(classes.card, { [classes[type]]: true })}
      onClick={handleCardClick}
      style={{ width }}
    >
      <BookCard book={book} />
    </div>
  );
};

export default React.memo(BooksCarousel);
