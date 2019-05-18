import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { createGenerateClassName } from '@material-ui/styles';
import { GenerateClassName, SheetsRegistry } from 'jss';

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
  typography: {
    useNextVariants: true,
  },
});

export interface PageContext extends MuiThemeProviderProps {
  generateClassName: GenerateClassName<string>; // not sure what goes here
  sheetsRegistry: SheetsRegistry;
}

export default function(): PageContext {
  return {
    children: undefined,
    // The standard class name generator.
    generateClassName: createGenerateClassName() as any,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    theme,
  };
}
