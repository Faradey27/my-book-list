import { defineMessages, FormattedMessage } from 'react-intl';

import { Theme, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';

const messages = defineMessages({
  title: {
    id: 'headerBar.title.recommendation',
    defaultMessage: 'Recommendations',
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    color: theme.palette.white,
  },
  button: {
    color: theme.palette.white,
  },
}));

const HeaderBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton className={classes.button}>
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} align="center">
        <FormattedMessage {...messages.title} />
      </Typography>
      <IconButton className={classes.button}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default HeaderBar;
