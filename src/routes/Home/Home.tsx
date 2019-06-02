import { useCallback } from 'react';

import { RouterProps, withRouter } from 'next/router';

import { makeStyles } from '@material-ui/styles';

import BooksCarousel from '../../components/BooksCarousel';
import HeaderBar from '../../components/HeaderBar';
import Navigation, { navigationPages } from '../../components/Navigation';
import RootLayout from '../../layouts/RootLayout';

const cards = [
  {
    id: 0,
    avatar: 'https://images.gr-assets.com/books/1534627688l/41217441.jpg',
  },
  {
    id: 1,
    avatar: 'https://images.gr-assets.com/books/1453834342l/28757261.jpg',
  },
  {
    id: 2,
    avatar: 'https://images.gr-assets.com/books/1334353486l/12896837.jpg',
  },
  {
    id: 3,
    avatar: 'https://images.gr-assets.com/books/1410764268l/397507.jpg',
  },
  {
    id: 4,
    avatar: 'https://images.gr-assets.com/books/1451389078l/28381079.jpg',
  },
  {
    id: 5,
    avatar: 'https://images.gr-assets.com/books/1419527598l/23628751.jpg',
  },
  {
    id: 6,
    avatar: 'https://images.gr-assets.com/books/1449503230l/28117433.jpg',
  },
  {
    id: 7,
    avatar: 'https://images.gr-assets.com/books/1403698189l/22586472.jpg',
  },
  { id: 8, avatar: 'https://images.gr-assets.com/books/1307490924l/70787.jpg' },
  { id: 9, avatar: 'https://images.gr-assets.com/books/1405467461l/50091.jpg' },
  {
    id: 10,
    avatar: 'https://images.gr-assets.com/books/1534627688l/41217441.jpg',
  },
];

interface IHomeProps {
  router: RouterProps;
}

const Home = ({ router }: IHomeProps) => {
  const classes = useStyles();
  const handleIndexChange = useCallback((nextIndex: number) => {
    router.push({ pathname: '/', query: { activeBookIndex: nextIndex } });
  }, []);
  const query = router.query || {};

  return (
    <RootLayout className={classes.root}>
      <HeaderBar />
      <Navigation selectedId={navigationPages.bestForYou} />
      <div className={classes.content}>
        <BooksCarousel
          activeIndex={Number(query.activeBookIndex) || 2}
          books={cards}
          onIndexChange={handleIndexChange}
        />
      </div>
    </RootLayout>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden',
  },
  content: {},
}));

export default withRouter(Home);
