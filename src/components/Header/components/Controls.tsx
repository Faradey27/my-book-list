import React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

interface IControlsProps extends WithStyles<typeof styles> {
  onProfileClick: () => void;
};

const Controls = ({ classes, onProfileClick }: IControlsProps ) => {
  return (
    <div className={classes.controls}>
      <IconButton
        color="inherit"
        onClick={onProfileClick}
      >
        <AccountCircle />
      </IconButton>
    </div>
  )
};

const styles = () => createStyles({
  controls: {
    display: 'flex',
  }
});

export default withStyles(styles)(Controls);
