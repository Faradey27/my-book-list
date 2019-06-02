import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    main: string;
    white: string;
  }

  interface PaletteOptions {
    main: string;
    white: string;
  }
}

const theme = createMuiTheme({
  palette: {
    main: '#486AB0',
    white: '#ffffff',
  },
});

export default theme;
