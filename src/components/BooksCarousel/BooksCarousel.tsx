import React, { useCallback } from 'react';
import Swipe from 'react-easy-swipe';

import { makeStyles } from '@material-ui/styles';

import BooksCarouselCard, { CardType } from './BooksCarouselCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: 'transform 0.8s',
    transform: ((props: { activeCardIndex: number }) =>
      `translateX(calc( ((100vw - 70%) / 2) - (70% * ${props.activeCardIndex})))`) as any,
    maxWidth: 1200,
  },
}));

const getCardType = (index: number, activeIndex: number) => {
  if (index === activeIndex - 1) {
    return CardType.prev;
  }
  if (index === activeIndex + 1) {
    return CardType.next;
  }
  if (index === activeIndex) {
    return CardType.active;
  }
  return CardType.default;
};

interface IBooksCarousel {
  activeIndex?: number;
  books: any[];
  onIndexChange: (nextIndex: number) => void;
}

const BooksCarousel = ({
  books,
  activeIndex = 0,
  onIndexChange,
}: IBooksCarousel) => {
  const classes = useStyles({ activeCardIndex: activeIndex });

  const handleNewActiveIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < books.length) {
        onIndexChange(index);
      }
    },
    [activeIndex]
  );

  const handleSwipeRight = useCallback(
    () => handleNewActiveIndex(activeIndex - 1),
    [activeIndex]
  );
  const handleSwipeLeft = useCallback(
    () => handleNewActiveIndex(activeIndex + 1),
    [activeIndex]
  );

  return (
    <Swipe onSwipeRight={handleSwipeRight} onSwipeLeft={handleSwipeLeft}>
      <div className={classes.root}>
        {books.map((book, index) => (
          <BooksCarouselCard
            key={book.id}
            index={index}
            type={getCardType(index, activeIndex)}
            book={book}
            onClick={handleNewActiveIndex}
          />
        ))}
      </div>
    </Swipe>
  );
};

export default BooksCarousel;
