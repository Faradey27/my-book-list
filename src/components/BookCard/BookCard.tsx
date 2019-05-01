import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 8,
    boxShadow:
      '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    width: '100%',
    height: '100%',
  },
}));

const BookCard = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.root}
      src="https://images.gr-assets.com/books/1534627688l/41217441.jpg"
    />
  );
};

export default BookCard;
