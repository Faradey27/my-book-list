import { defineMessages, FormattedMessage } from 'react-intl';

import classNames from 'classnames';

import { Theme, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const messages = defineMessages({
  bestForYou: {
    id: 'navigation.text.bestForYou',
    defaultMessage: 'Best for you',
  },
  top: {
    id: 'navigation.text.top',
    defaultMessage: 'Top',
  },
  bestSellers: {
    id: 'navigation.text.bestSellers',
    defaultMessage: 'Best sellers',
  },
  special: {
    id: 'navigation.text.special',
    defaultMessage: 'Special',
  },
  mustRead: {
    id: 'navigation.text.special',
    defaultMessage: 'Must read',
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 33,
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    overflowX: 'auto',
    paddingLeft: 6,
    height: 43,
  },
  button: {
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  buttonLabel: {
    color: theme.palette.white,
    opacity: 0.4,
  },
  activeButtonLabel: {
    opacity: 1,
  },
}));

const buttons = [
  { label: messages.bestForYou, id: 'bestForYou' },
  { label: messages.top, id: 'top' },
  { label: messages.bestSellers, id: 'bestSellers' },
  { label: messages.special, id: 'special' },
  { label: messages.mustRead, id: 'mustRead' },
];

export enum navigationPages {
  bestForYou = 'bestForYou',
  top = 'top',
  bestSellers = 'bestSellers',
  special = 'special',
  mustRead = 'mustRead',
}

interface INavigationProps {
  selectedId: navigationPages;
}

const Navigation = ({ selectedId }: INavigationProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {buttons.map(button => (
          <Button className={classes.button} key={button.id}>
            <Typography
              className={classNames(classes.buttonLabel, {
                [classes.activeButtonLabel]: selectedId === button.id,
              })}
            >
              <FormattedMessage {...button.label} />
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
