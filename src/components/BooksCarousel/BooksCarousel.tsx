import React, { useCallback, useState } from 'react';
import Swipe from 'react-easy-swipe';

import { makeStyles } from '@material-ui/styles';

import BooksCarouselCard, { CardType } from './BooksCarouselCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: 'transform 0.8s',
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
}

const BooksCarousel = ({ books, activeIndex = 0 }: IBooksCarousel) => {
  const cardWidth = 224;
  const offset =
    typeof window !== 'undefined' ? (window.innerWidth - cardWidth) / 2 : 48;
  const classes = useStyles();

  const [activeCardIndex, setActiveCardIndex] = useState(activeIndex);
  const [galerryOffset, setGalleryOffset] = useState(
    offset - cardWidth * activeCardIndex
  );

  const handleNewActiveIndex = useCallback(
    (index: number) => {
      if (index < activeCardIndex) {
        setGalleryOffset(galerryOffset + cardWidth);
      }
      if (index > activeCardIndex) {
        setGalleryOffset(galerryOffset - cardWidth);
      }
      setActiveCardIndex(index);
    },
    [activeCardIndex]
  );

  const handleSwipeRight = useCallback(
    () => handleNewActiveIndex(activeCardIndex - 1),
    [activeCardIndex]
  );
  const handleSwipeLeft = useCallback(
    () => handleNewActiveIndex(activeCardIndex + 1),
    [activeCardIndex]
  );

  return (
    <Swipe onSwipeRight={handleSwipeRight} onSwipeLeft={handleSwipeLeft}>
      <div
        style={{ transform: `translateX(${galerryOffset}px)` }}
        className={classes.root}
      >
        {books.map((book, index) => (
          <BooksCarouselCard
            width={cardWidth}
            key={book.id}
            index={index}
            type={getCardType(index, activeCardIndex)}
            book={book}
            onClick={handleNewActiveIndex}
          />
        ))}
      </div>
    </Swipe>
  );
};

export default BooksCarousel;
