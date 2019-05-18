import { makeStyles } from '@material-ui/styles';

import BookCard from '../../components/BookCard';
import HeaderBar from '../../components/HeaderBar';
import Navigation, { navigationPages } from '../../components/Navigation';
import RootLayout from '../../layouts/RootLayout';

const Home = () => {
  const classes = useStyles();

  return (
    <RootLayout>
      <HeaderBar />
      <Navigation selectedId={navigationPages.bestForYou} />
      <div className={classes.content}>
        <div className={classes.card}>
          <BookCard />
        </div>
        <div className={classes.card}>
          <BookCard />
        </div>
        <div className={classes.card}>
          <BookCard />
        </div>
      </div>
    </RootLayout>
  );
};

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    overflowX: 'auto',
  },
  card: {
    margin: 12,
    height: 390,
    width: '70vw',
    flexShrink: 0,
  },
  header: {
    height: 100,
  },
}));

export default Home;
// 475 height
