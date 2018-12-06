import React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

interface ISearchProps extends WithStyles<typeof styles> {
  onSearch?: (value: string) => void;
  onSearchSubmit?: (value: string) => void;
};

const Search = ({ classes, onSearch, onSearchSubmit }: ISearchProps ) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onSearch && onSearch(e.target.value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit((e.target as any).search.value);
    }
  };

  return (
    <form className={classes.search} onSubmit={onSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        name="search"
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={onChange}
      />
    </form>
  )
};

const styles = (theme: Theme) => createStyles({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: theme.spacing.unit * 6,
    pointerEvents: 'none',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing.unit * 10,
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 6,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 10,
    },
  },
});

export default withStyles(styles)(Search);
