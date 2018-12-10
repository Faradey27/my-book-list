import React from 'react';

import BookCard from '../../components/BookCard';
import Header from '../../components/Header';
import { IBook } from '../../entities';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import mockedBooks from './__test__/books.mock.json';

interface IHomeProps extends WithStyles<typeof styles> {
  books: IBook[];
}

const handleProfileClick = () => {
  console.info('PROFILE CLICKED');
}

const handleSearch = (value: string) => {
  console.info('SEARCH', value);
}

const handleSearchSubmit = (value: string) => {
  console.info('SEARCH SUBMIT', value);
}

const Home = ({ books, classes }: IHomeProps) => (
  <div className={classes.root} data-testid="home-page">
    <Header
      onSearch={handleSearch}
      onSearchSubmit={handleSearchSubmit}
      onProfileClick={handleProfileClick}
    />
    {
      books.map(book =>
        <BookCard
          key={book.id}
          {...book}
        />
      )
    }
  </div>
);

const HEADER_HEIGHT = 56;

const styles = () => createStyles({
  root: {
    marginTop: HEADER_HEIGHT,
    overflow: 'auto',
    height: `calc(100vh - ${HEADER_HEIGHT}px)`
  }
})

Home.defaultProps = {
  books: mockedBooks
}

export default withStyles(styles)(Home);
