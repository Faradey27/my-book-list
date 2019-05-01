import { makeStyles } from '@material-ui/styles';
import BookCard from '../../components/BookCard';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header} />
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
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    display: 'flex',
    justifyContent: 'center',
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
