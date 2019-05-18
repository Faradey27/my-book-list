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

interface IBook {
  avatar: string;
}

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  const classes = useStyles();

  return <img className={classes.root} src={book.avatar} />;
};

export default BookCard;
