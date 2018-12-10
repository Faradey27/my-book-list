import React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import Controls from './components/Controls';
import Search from './components/Search';

const LOGO_TEXT = 'My Book List';

interface IHeaderProps extends WithStyles<typeof styles> {
  onSearch: (value: string) => void;
  onSearchSubmit: (value: string) => void;
  onProfileClick: () => void;
};

const Header = ({ classes, onSearch, onSearchSubmit, onProfileClick }: IHeaderProps) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          {LOGO_TEXT}
        </Typography>
        <Search
          onSearch={onSearch}
          onSearchSubmit={onSearchSubmit}
        />
        <div className={classes.grow} />
        <Controls onProfileClick={onProfileClick}/>
      </Toolbar>
    </AppBar>
  </div>
)

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  appBar: {
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

export default withStyles(styles)(Header);
